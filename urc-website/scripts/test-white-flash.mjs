import puppeteer from 'puppeteer';
import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = './screenshots/white-flash-tests';

// Ensure screenshot directory exists
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'conference', path: '/conference' },
  { name: 'get-involved', path: '/get-involved' },
  { name: 'sponsors', path: '/sponsors' },
  { name: 'contact', path: '/contact' },
];

// Selectors for elements that should have hover color transitions
const interactiveSelectors = [
  // Buttons with bg color change on hover
  'a.bg-black.hover\\:bg-\\[\\#4B9CD3\\]',
  'a.hover\\:bg-black',
  'button.hover\\:bg-black',
  '.card-invert',
  '.link-fill',
  '.link-black',
  
  // Generic patterns that might have issues
  '[class*="hover:bg-"][class*="hover:text-"]',
  '[class*="transition"][class*="hover:bg-"]',
  
  // Specific component patterns
  '.group:has([class*="group-hover"])',
  'a[class*="transition-colors"]',
  'button[class*="transition-colors"]',
  'div[class*="transition-colors"]',
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Parse RGB string to object
function parseRgb(rgbStr) {
  if (!rgbStr) return null;
  const match = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match) {
    return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
  }
  return null;
}

// Check if a color is close to white
function isWhiteish(rgb, threshold = 240) {
  if (!rgb) return false;
  return rgb.r >= threshold && rgb.g >= threshold && rgb.b >= threshold;
}

// Check if two colors are significantly different
function areColorsDifferent(rgb1, rgb2, threshold = 50) {
  if (!rgb1 || !rgb2) return false;
  const diff = Math.abs(rgb1.r - rgb2.r) + Math.abs(rgb1.g - rgb2.g) + Math.abs(rgb1.b - rgb2.b);
  return diff > threshold;
}

// Helper function to find the nearest opaque ancestor's background color
function getOpaqueAncestorBackground(element) {
  let current = element;
  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    const bg = style.backgroundColor;
    // Check if background is not transparent (rgba with alpha > 0 or rgb)
    if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
      // Parse alpha if rgba
      const rgbaMatch = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (rgbaMatch) {
        const alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
        if (alpha > 0.1) { // Consider it opaque if alpha > 0.1
          return bg;
        }
      }
    }
    current = current.parentElement;
  }
  // Fallback to body background or white
  return window.getComputedStyle(document.body).backgroundColor || 'rgb(255, 255, 255)';
}

async function captureColorTransition(page, element, name, pageName, index) {
  const results = {
    name,
    index,
    element: null,
    states: [],
    issues: [],
  };

  try {
    const box = await element.boundingBox();
    if (!box || box.width < 10 || box.height < 10) {
      return null;
    }

    // Get element classes for debugging
    const classes = await page.evaluate(el => el.className, element);
    results.element = classes.substring(0, 100);

    // Inject the helper function into the page
    await page.evaluate(() => {
      window.getOpaqueAncestorBackground = function(element) {
        let current = element;
        while (current && current !== document.body) {
          const style = window.getComputedStyle(current);
          const bg = style.backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const rgbaMatch = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (rgbaMatch) {
              const alpha = rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1;
              if (alpha > 0.1) {
                return bg;
              }
            }
          }
          current = current.parentElement;
        }
        return window.getComputedStyle(document.body).backgroundColor || 'rgb(255, 255, 255)';
      };
    });

    // Get initial state - use nearest opaque ancestor for background
    const initialColors = await page.evaluate((el) => {
      const style = window.getComputedStyle(el);
      // Get the effective background (nearest opaque ancestor)
      const effectiveBg = window.getOpaqueAncestorBackground(el);
      // Also check child text elements
      const textEl = el.querySelector('span, p') || el;
      const textStyle = window.getComputedStyle(textEl);
      return {
        bg: effectiveBg,
        ownBg: style.backgroundColor,
        color: textStyle.color,
        borderColor: style.borderColor,
      };
    }, element);
    results.states.push({ phase: 'initial', ...initialColors });

    // Move to element
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);

    // Capture at multiple points during transition
    const transitionPoints = [20, 50, 100, 150, 200, 300];
    
    for (const ms of transitionPoints) {
      await delay(ms === 20 ? 20 : (ms - transitionPoints[transitionPoints.indexOf(ms) - 1]));
      
      const colors = await page.evaluate((el) => {
        const effectiveBg = window.getOpaqueAncestorBackground(el);
        const textEl = el.querySelector('span, p') || el;
        const textStyle = window.getComputedStyle(textEl);
        return {
          bg: effectiveBg,
          color: textStyle.color,
        };
      }, element);
      
      results.states.push({ phase: `${ms}ms`, ...colors });
    }

    // Final state after full transition
    await delay(200);
    const finalColors = await page.evaluate((el) => {
      const effectiveBg = window.getOpaqueAncestorBackground(el);
      const textEl = el.querySelector('span, p') || el;
      const textStyle = window.getComputedStyle(textEl);
      return {
        bg: effectiveBg,
        color: textStyle.color,
      };
    }, element);
    results.states.push({ phase: 'final', ...finalColors });

    // Analyze for white flash
    const initialBg = parseRgb(initialColors.bg);
    const finalBg = parseRgb(finalColors.bg);
    const initialText = parseRgb(initialColors.color);
    const finalText = parseRgb(finalColors.color);

    // Check each transition point for white flash
    for (let i = 1; i < results.states.length - 1; i++) {
      const state = results.states[i];
      const bg = parseRgb(state.bg);
      const text = parseRgb(state.color);

      // Issue: Background flashes white when it shouldn't be white
      if (isWhiteish(bg) && !isWhiteish(initialBg) && !isWhiteish(finalBg)) {
        results.issues.push({
          type: 'white-bg-flash',
          phase: state.phase,
          description: `Background becomes white (${state.bg}) during transition`,
          initial: initialColors.bg,
          during: state.bg,
          final: finalColors.bg,
        });
      }

      // Issue: Text flashes white when it shouldn't
      if (isWhiteish(text) && !isWhiteish(initialText) && !isWhiteish(finalText)) {
        results.issues.push({
          type: 'white-text-flash',
          phase: state.phase,
          description: `Text becomes white (${state.color}) during transition`,
          initial: initialColors.color,
          during: state.color,
          final: finalColors.color,
        });
      }

      // Issue: Text becomes same as background (invisible)
      // Skip if background is transparent throughout (element doesn't have bg hover effect itself)
      const bgIsTransparent = state.bg === 'rgba(0, 0, 0, 0)' || state.bg === 'transparent';
      const initialBgIsTransparent = initialColors.bg === 'rgba(0, 0, 0, 0)' || initialColors.bg === 'transparent';
      const finalBgIsTransparent = finalColors.bg === 'rgba(0, 0, 0, 0)' || finalColors.bg === 'transparent';
      
      // Only check for invisible text if the element has an actual background (not just inherited)
      if (bg && text && !(bgIsTransparent && initialBgIsTransparent && finalBgIsTransparent)) {
        const colorDiff = Math.abs(bg.r - text.r) + Math.abs(bg.g - text.g) + Math.abs(bg.b - text.b);
        if (colorDiff < 30) { // Colors are too similar
          const initialDiff = initialBg && initialText ? 
            Math.abs(initialBg.r - initialText.r) + Math.abs(initialBg.g - initialText.g) + Math.abs(initialBg.b - initialText.b) : 100;
          
          if (initialDiff > 50) { // Only flag if they were different initially
            results.issues.push({
              type: 'invisible-text',
              phase: state.phase,
              description: `Text and background become same color`,
              bg: state.bg,
              color: state.color,
            });
          }
        }
      }
    }

    // Move mouse away
    await page.mouse.move(0, 0);
    await delay(100);

    // Screenshot if issues found
    if (results.issues.length > 0) {
      const screenshotPath = `${SCREENSHOT_DIR}/${pageName}-${name}-${index}.png`;
      await page.screenshot({
        path: screenshotPath,
        clip: {
          x: Math.max(0, box.x - 30),
          y: Math.max(0, box.y - 30),
          width: Math.min(box.width + 60, 600),
          height: Math.min(box.height + 60, 300),
        }
      });
      results.screenshot = screenshotPath;
    }

    return results;
  } catch (error) {
    return null;
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
    elements: [],
    issues: [],
  };

  try {
    await page.goto(`${BASE_URL}${pageInfo.path}`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    await delay(3000); // Wait for load animations

    // Find all elements with hover transitions
    const allElements = await page.$$('[class*="hover:"], [class*="transition"]');
    console.log(`  Found ${allElements.length} elements with hover/transition classes`);

    // Test each element
    let testedCount = 0;
    let issueCount = 0;

    for (let i = 0; i < Math.min(allElements.length, 100); i++) {
      const element = allElements[i];
      
      // Check if element is visible and has meaningful size
      const isVisible = await page.evaluate(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return rect.width > 20 && rect.height > 10 && 
               style.display !== 'none' && 
               style.visibility !== 'hidden' &&
               parseFloat(style.opacity) > 0;
      }, element);

      if (!isVisible) continue;

      // Check if element has color-related hover classes
      const hasColorHover = await page.evaluate(el => {
        const cls = el.className;
        return cls.includes('hover:bg-') || 
               cls.includes('hover:text-') || 
               cls.includes('group-hover:') ||
               cls.includes('transition-colors') ||
               cls.includes('card-invert') ||
               cls.includes('link-fill') ||
               cls.includes('link-black');
      }, element);

      if (!hasColorHover) continue;

      testedCount++;
      const result = await captureColorTransition(page, element, 'hover-element', pageInfo.name, i);
      
      if (result && result.issues.length > 0) {
        pageResults.elements.push(result);
        pageResults.issues.push(...result.issues);
        issueCount += result.issues.length;
        
        console.log(`  [${i}] Found ${result.issues.length} issue(s):`);
        result.issues.forEach(issue => {
          console.log(`      - ${issue.type} at ${issue.phase}: ${issue.description}`);
        });
      }
    }

    console.log(`\n  Tested ${testedCount} interactive elements`);
    console.log(`  Found ${issueCount} issues`);

  } catch (error) {
    console.error(`  Error: ${error.message}`);
  }

  await page.close();
  return pageResults;
}

async function main() {
  console.log('Starting white flash animation tests...\n');
  console.log('Looking for elements where colors flash white during hover transitions.\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const allResults = {
    timestamp: new Date().toISOString(),
    pages: [],
    summary: {
      totalIssues: 0,
      byType: {},
    },
  };

  for (const pageInfo of pages) {
    const results = await testPage(browser, pageInfo);
    allResults.pages.push(results);
    allResults.summary.totalIssues += results.issues.length;

    results.issues.forEach(issue => {
      if (!allResults.summary.byType[issue.type]) {
        allResults.summary.byType[issue.type] = [];
      }
      allResults.summary.byType[issue.type].push({
        page: pageInfo.name,
        ...issue,
      });
    });
  }

  await browser.close();

  // Save report
  const reportPath = `${SCREENSHOT_DIR}/white-flash-report.json`;
  fs.writeFileSync(reportPath, JSON.stringify(allResults, null, 2));
  console.log(`\n\nReport saved to: ${reportPath}`);

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('WHITE FLASH TEST SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total issues found: ${allResults.summary.totalIssues}`);

  if (Object.keys(allResults.summary.byType).length > 0) {
    console.log('\nIssues by type:');
    for (const [type, issues] of Object.entries(allResults.summary.byType)) {
      console.log(`\n  ${type}: ${issues.length} occurrences`);
      issues.forEach(issue => {
        console.log(`    - ${issue.page}: ${issue.description}`);
        if (issue.initial && issue.final) {
          console.log(`      Initial: ${issue.initial}`);
          console.log(`      During:  ${issue.during}`);
          console.log(`      Final:   ${issue.final}`);
        }
      });
    }
  } else {
    console.log('\nNo white flash issues detected!');
  }
}

main().catch(console.error);
