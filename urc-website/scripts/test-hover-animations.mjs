import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = './screenshots/hover-tests';

// Ensure screenshot directory exists
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

// Pages to test
const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'conference', path: '/conference' },
  { name: 'get-involved', path: '/get-involved' },
  { name: 'sponsors', path: '/sponsors' },
  { name: 'contact', path: '/contact' },
];

// Common selectors for interactive elements with hover effects
const hoverSelectors = [
  // Buttons
  { selector: 'a[href*="get-involved"]', name: 'cta-button' },
  { selector: 'button', name: 'button' },
  { selector: '.btn-pill', name: 'btn-pill' },
  { selector: '.btn-square', name: 'btn-square' },
  { selector: '.btn-ghost', name: 'btn-ghost' },
  { selector: '.btn-arrow', name: 'btn-arrow' },
  
  // Links
  { selector: '.link', name: 'link' },
  { selector: '.link-fill', name: 'link-fill' },
  { selector: '.link-black', name: 'link-black' },
  { selector: '.link-underline', name: 'link-underline' },
  { selector: '.link-nav', name: 'link-nav' },
  
  // Cards
  { selector: '.card-bordered', name: 'card-bordered' },
  { selector: '.card-invert', name: 'card-invert' },
  { selector: '.card-lift', name: 'card-lift' },
  
  // Navigation
  { selector: 'nav a', name: 'nav-link' },
  { selector: 'header a', name: 'header-link' },
  
  // Generic hover containers
  { selector: '[class*="hover:bg-"]', name: 'hover-bg' },
  { selector: '[class*="hover:text-"]', name: 'hover-text' },
  { selector: '[class*="group"]', name: 'group-hover' },
  
  // Specific page elements
  { selector: '.group', name: 'group-container' },
  { selector: '[class*="transition"]', name: 'transition-element' },
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function captureHoverSequence(page, element, elementInfo, pageName, index) {
  const results = {
    selector: elementInfo.selector,
    name: elementInfo.name,
    index,
    screenshots: [],
    issues: [],
    computedStyles: {}
  };

  try {
    // Get element's bounding box
    const box = await element.boundingBox();
    if (!box || box.width === 0 || box.height === 0) {
      return null; // Skip invisible elements
    }

    // Get initial computed styles
    const initialStyles = await page.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        backgroundColor: style.backgroundColor,
        color: style.color,
        borderColor: style.borderColor,
        opacity: style.opacity,
        transform: style.transform,
        transition: style.transition,
      };
    }, element);
    results.computedStyles.initial = initialStyles;

    // Screenshot before hover
    const beforePath = `${SCREENSHOT_DIR}/${pageName}-${elementInfo.name}-${index}-before.png`;
    await page.screenshot({
      path: beforePath,
      clip: {
        x: Math.max(0, box.x - 20),
        y: Math.max(0, box.y - 20),
        width: Math.min(box.width + 40, 800),
        height: Math.min(box.height + 40, 400),
      }
    });
    results.screenshots.push({ state: 'before', path: beforePath });

    // Move mouse to element center
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    
    // Wait a tiny bit for transition to start
    await delay(50);

    // Screenshot during transition (early)
    const duringPath = `${SCREENSHOT_DIR}/${pageName}-${elementInfo.name}-${index}-during.png`;
    await page.screenshot({
      path: duringPath,
      clip: {
        x: Math.max(0, box.x - 20),
        y: Math.max(0, box.y - 20),
        width: Math.min(box.width + 40, 800),
        height: Math.min(box.height + 40, 400),
      }
    });
    results.screenshots.push({ state: 'during', path: duringPath });

    // Get styles during hover transition
    const duringStyles = await page.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        backgroundColor: style.backgroundColor,
        color: style.color,
        borderColor: style.borderColor,
        opacity: style.opacity,
        transform: style.transform,
      };
    }, element);
    results.computedStyles.during = duringStyles;

    // Wait for transition to complete
    await delay(400);

    // Screenshot after hover (steady state)
    const afterPath = `${SCREENSHOT_DIR}/${pageName}-${elementInfo.name}-${index}-after.png`;
    await page.screenshot({
      path: afterPath,
      clip: {
        x: Math.max(0, box.x - 20),
        y: Math.max(0, box.y - 20),
        width: Math.min(box.width + 40, 800),
        height: Math.min(box.height + 40, 400),
      }
    });
    results.screenshots.push({ state: 'after', path: afterPath });

    // Get final hover styles
    const afterStyles = await page.evaluate((el) => {
      const style = window.getComputedStyle(el);
      return {
        backgroundColor: style.backgroundColor,
        color: style.color,
        borderColor: style.borderColor,
        opacity: style.opacity,
        transform: style.transform,
      };
    }, element);
    results.computedStyles.after = afterStyles;

    // Check for issues - white flash detection
    const whiteColors = ['rgb(255, 255, 255)', 'rgba(255, 255, 255, 1)', '#ffffff', '#fff', 'white'];
    const transparentColors = ['rgba(0, 0, 0, 0)', 'transparent'];
    
    // Issue: Background goes white during transition but shouldn't
    if (whiteColors.includes(duringStyles.backgroundColor) && 
        !whiteColors.includes(initialStyles.backgroundColor) &&
        !whiteColors.includes(afterStyles.backgroundColor)) {
      results.issues.push({
        type: 'white-flash-bg',
        description: 'Background flashes white during transition',
        initial: initialStyles.backgroundColor,
        during: duringStyles.backgroundColor,
        final: afterStyles.backgroundColor,
      });
    }

    // Issue: Text goes white during transition unexpectedly
    if (whiteColors.includes(duringStyles.color) && 
        !whiteColors.includes(initialStyles.color) &&
        !whiteColors.includes(afterStyles.color)) {
      results.issues.push({
        type: 'white-flash-text',
        description: 'Text flashes white during transition',
        initial: initialStyles.color,
        during: duringStyles.color,
        final: afterStyles.color,
      });
    }

    // Issue: Element becomes invisible during transition
    if ((duringStyles.opacity === '0' || transparentColors.includes(duringStyles.backgroundColor)) &&
        initialStyles.opacity !== '0' && afterStyles.opacity !== '0') {
      results.issues.push({
        type: 'invisible-flash',
        description: 'Element becomes invisible during transition',
        initial: { opacity: initialStyles.opacity, bg: initialStyles.backgroundColor },
        during: { opacity: duringStyles.opacity, bg: duringStyles.backgroundColor },
        final: { opacity: afterStyles.opacity, bg: afterStyles.backgroundColor },
      });
    }

    // Issue: Both text and background become the same color (invisible text)
    if (duringStyles.color === duringStyles.backgroundColor && 
        initialStyles.color !== initialStyles.backgroundColor) {
      results.issues.push({
        type: 'same-color-flash',
        description: 'Text and background become same color during transition',
        color: duringStyles.color,
        backgroundColor: duringStyles.backgroundColor,
      });
    }

    // Move mouse away
    await page.mouse.move(0, 0);
    await delay(100);

    return results;
  } catch (error) {
    results.issues.push({
      type: 'error',
      description: error.message,
    });
    return results;
  }
}

async function testPage(browser, pageInfo) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: ${pageInfo.name} (${pageInfo.path})`);
  console.log('='.repeat(60));

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const pageResults = {
    page: pageInfo.name,
    path: pageInfo.path,
    elements: [],
    issueCount: 0,
  };

  try {
    await page.goto(`${BASE_URL}${pageInfo.path}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for page to fully load and animations to settle
    await delay(3000);

    // Scroll down a bit to trigger lazy-loaded content
    await page.evaluate(() => window.scrollTo(0, 500));
    await delay(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await delay(500);

    for (const selectorInfo of hoverSelectors) {
      try {
        const elements = await page.$$(selectorInfo.selector);
        
        if (elements.length > 0) {
          console.log(`\n  Testing ${selectorInfo.name}: ${elements.length} elements found`);
          
          // Test up to 5 elements of each type
          const maxToTest = Math.min(elements.length, 5);
          
          for (let i = 0; i < maxToTest; i++) {
            const result = await captureHoverSequence(
              page, 
              elements[i], 
              selectorInfo, 
              pageInfo.name, 
              i
            );
            
            if (result) {
              pageResults.elements.push(result);
              
              if (result.issues.length > 0) {
                pageResults.issueCount += result.issues.length;
                console.log(`    Element ${i}: ${result.issues.length} issue(s) found`);
                result.issues.forEach(issue => {
                  console.log(`      - ${issue.type}: ${issue.description}`);
                });
              }
            }
          }
        }
      } catch (err) {
        console.log(`  Error testing ${selectorInfo.name}: ${err.message}`);
      }
    }
  } catch (error) {
    console.error(`  Page error: ${error.message}`);
    pageResults.error = error.message;
  }

  await page.close();
  return pageResults;
}

async function main() {
  console.log('Starting hover animation tests...\n');
  console.log('This will test hover states on interactive elements across all pages.\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const allResults = {
    timestamp: new Date().toISOString(),
    pages: [],
    summary: {
      totalElements: 0,
      totalIssues: 0,
      issuesByType: {},
    },
  };

  for (const pageInfo of pages) {
    const results = await testPage(browser, pageInfo);
    allResults.pages.push(results);
    allResults.summary.totalElements += results.elements.length;
    allResults.summary.totalIssues += results.issueCount;

    // Categorize issues by type
    results.elements.forEach(el => {
      el.issues.forEach(issue => {
        if (!allResults.summary.issuesByType[issue.type]) {
          allResults.summary.issuesByType[issue.type] = [];
        }
        allResults.summary.issuesByType[issue.type].push({
          page: pageInfo.name,
          selector: el.selector,
          name: el.name,
          index: el.index,
          description: issue.description,
          details: issue,
        });
      });
    });
  }

  await browser.close();

  // Save detailed results
  const reportPath = `${SCREENSHOT_DIR}/hover-test-report.json`;
  fs.writeFileSync(reportPath, JSON.stringify(allResults, null, 2));
  console.log(`\n\nDetailed report saved to: ${reportPath}`);

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('HOVER ANIMATION TEST SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total elements tested: ${allResults.summary.totalElements}`);
  console.log(`Total issues found: ${allResults.summary.totalIssues}`);
  
  if (Object.keys(allResults.summary.issuesByType).length > 0) {
    console.log('\nIssues by type:');
    for (const [type, issues] of Object.entries(allResults.summary.issuesByType)) {
      console.log(`\n  ${type}: ${issues.length} occurrences`);
      issues.slice(0, 5).forEach(issue => {
        console.log(`    - ${issue.page}/${issue.name}[${issue.index}]: ${issue.description}`);
      });
      if (issues.length > 5) {
        console.log(`    ... and ${issues.length - 5} more`);
      }
    }
  } else {
    console.log('\nNo issues detected!');
  }
}

main().catch(console.error);
