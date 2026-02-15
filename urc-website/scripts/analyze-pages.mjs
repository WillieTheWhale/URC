import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = './screenshots';

const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'conference', path: '/conference' },
  { name: 'get-involved', path: '/get-involved' },
  { name: 'sponsors', path: '/sponsors' },
  { name: 'contact', path: '/contact' },
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'wide', width: 1920, height: 1080 },
];

// Create screenshots directory
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function analyzeTextOverflow(page) {
  // Find elements with text overflow issues
  const overflowIssues = await page.evaluate(() => {
    const issues = [];
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      
      // Check for horizontal overflow
      if (el.scrollWidth > el.clientWidth && style.overflowX !== 'scroll' && style.overflowX !== 'auto') {
        const text = el.innerText?.substring(0, 100);
        if (text && text.trim().length > 0) {
          issues.push({
            type: 'horizontal-overflow',
            selector: getSelector(el),
            text: text,
            scrollWidth: el.scrollWidth,
            clientWidth: el.clientWidth,
            overflow: style.overflow,
            position: { top: rect.top, left: rect.left }
          });
        }
      }
      
      // Check for text being clipped
      if (style.textOverflow === 'ellipsis' || style.overflow === 'hidden') {
        if (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) {
          const text = el.innerText?.substring(0, 100);
          if (text && text.trim().length > 0) {
            issues.push({
              type: 'text-clipped',
              selector: getSelector(el),
              text: text,
              position: { top: rect.top, left: rect.left }
            });
          }
        }
      }
      
      // Check for elements extending beyond viewport
      if (rect.right > window.innerWidth || rect.left < 0) {
        const text = el.innerText?.substring(0, 50);
        if (text && text.trim().length > 0 && rect.width > 50) {
          issues.push({
            type: 'beyond-viewport',
            selector: getSelector(el),
            text: text,
            rect: { left: rect.left, right: rect.right, width: rect.width },
            viewportWidth: window.innerWidth
          });
        }
      }
    });
    
    function getSelector(el) {
      if (el.id) return `#${el.id}`;
      if (el.className && typeof el.className === 'string') {
        const classes = el.className.split(' ').filter(c => c && !c.startsWith('_')).slice(0, 3).join('.');
        if (classes) return `${el.tagName.toLowerCase()}.${classes}`;
      }
      return el.tagName.toLowerCase();
    }
    
    return issues;
  });
  
  return overflowIssues;
}

async function analyzeSpacing(page) {
  // Check for spacing issues
  const spacingIssues = await page.evaluate(() => {
    const issues = [];
    
    // Check for overlapping elements
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li');
    const rects = [];
    
    textElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const text = el.innerText?.trim();
      if (text && rect.height > 0 && rect.width > 0) {
        rects.push({ el, rect, text: text.substring(0, 50) });
      }
    });
    
    // Check for text too close to edges
    rects.forEach(({ el, rect, text }) => {
      if (rect.left < 10 && rect.width > 100) {
        issues.push({
          type: 'too-close-to-left-edge',
          text: text,
          left: rect.left
        });
      }
      if (rect.right > window.innerWidth - 10 && rect.width > 100) {
        issues.push({
          type: 'too-close-to-right-edge',
          text: text,
          right: rect.right,
          viewportWidth: window.innerWidth
        });
      }
    });
    
    return issues;
  });
  
  return spacingIssues;
}

async function analyzeFontSizes(page) {
  // Check for problematic font sizes
  const fontIssues = await page.evaluate(() => {
    const issues = [];
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, label');
    
    textElements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const fontSize = parseFloat(style.fontSize);
      const text = el.innerText?.trim();
      
      if (text && text.length > 0) {
        // Check for very small text (less than 10px)
        if (fontSize < 10 && fontSize > 0) {
          issues.push({
            type: 'font-too-small',
            text: text.substring(0, 50),
            fontSize: fontSize,
            selector: el.tagName.toLowerCase() + (el.className ? '.' + el.className.split(' ')[0] : '')
          });
        }
        
        // Check for very large text that might overflow
        if (fontSize > 100) {
          const rect = el.getBoundingClientRect();
          if (rect.width > window.innerWidth * 0.9) {
            issues.push({
              type: 'large-text-may-overflow',
              text: text.substring(0, 50),
              fontSize: fontSize,
              elementWidth: rect.width,
              viewportWidth: window.innerWidth
            });
          }
        }
      }
    });
    
    return issues;
  });
  
  return fontIssues;
}

async function captureFullPage(page, pageName, viewport) {
  const filename = `${SCREENSHOT_DIR}/${pageName}-${viewport.name}.png`;
  await page.screenshot({ 
    path: filename, 
    fullPage: true 
  });
  console.log(`  Captured: ${filename}`);
  return filename;
}

async function main() {
  console.log('Starting page analysis...\n');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const allIssues = {};
  
  for (const pageInfo of pages) {
    console.log(`\n========================================`);
    console.log(`Analyzing: ${pageInfo.name} (${pageInfo.path})`);
    console.log(`========================================`);
    
    allIssues[pageInfo.name] = {
      overflow: [],
      spacing: [],
      fonts: []
    };
    
    for (const viewport of viewports) {
      const page = await browser.newPage();
      await page.setViewport({ width: viewport.width, height: viewport.height });
      
      console.log(`\n  Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`);
      
      try {
        await page.goto(`${BASE_URL}${pageInfo.path}`, { 
          waitUntil: 'networkidle0',
          timeout: 30000 
        });
        
        // Wait for loading screen (2800ms minimum) + content transition (500ms) + buffer
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Capture screenshot
        await captureFullPage(page, pageInfo.name, viewport);
        
        // Analyze issues
        const overflowIssues = await analyzeTextOverflow(page);
        const spacingIssues = await analyzeSpacing(page);
        const fontIssues = await analyzeFontSizes(page);
        
        if (overflowIssues.length > 0) {
          console.log(`  Found ${overflowIssues.length} overflow issues`);
          allIssues[pageInfo.name].overflow.push({
            viewport: viewport.name,
            issues: overflowIssues
          });
        }
        
        if (spacingIssues.length > 0) {
          console.log(`  Found ${spacingIssues.length} spacing issues`);
          allIssues[pageInfo.name].spacing.push({
            viewport: viewport.name,
            issues: spacingIssues
          });
        }
        
        if (fontIssues.length > 0) {
          console.log(`  Found ${fontIssues.length} font issues`);
          allIssues[pageInfo.name].fonts.push({
            viewport: viewport.name,
            issues: fontIssues
          });
        }
        
      } catch (error) {
        console.error(`  Error: ${error.message}`);
      }
      
      await page.close();
    }
  }
  
  await browser.close();
  
  // Write report
  const reportPath = `${SCREENSHOT_DIR}/analysis-report.json`;
  fs.writeFileSync(reportPath, JSON.stringify(allIssues, null, 2));
  console.log(`\n\nReport saved to: ${reportPath}`);
  
  // Print summary
  console.log('\n========================================');
  console.log('SUMMARY OF ISSUES');
  console.log('========================================\n');
  
  for (const [pageName, issues] of Object.entries(allIssues)) {
    const totalOverflow = issues.overflow.reduce((sum, v) => sum + v.issues.length, 0);
    const totalSpacing = issues.spacing.reduce((sum, v) => sum + v.issues.length, 0);
    const totalFonts = issues.fonts.reduce((sum, v) => sum + v.issues.length, 0);
    
    if (totalOverflow + totalSpacing + totalFonts > 0) {
      console.log(`${pageName}:`);
      if (totalOverflow > 0) console.log(`  - Overflow issues: ${totalOverflow}`);
      if (totalSpacing > 0) console.log(`  - Spacing issues: ${totalSpacing}`);
      if (totalFonts > 0) console.log(`  - Font issues: ${totalFonts}`);
    }
  }
}

main().catch(console.error);
