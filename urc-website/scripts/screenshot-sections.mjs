import puppeteer from 'puppeteer';
import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const DIR = './screenshots/sections';

if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR, { recursive: true });
}

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });
  // Wait for loading screen to finish
  await new Promise(r => setTimeout(r, 5000));

  // Get the total page height
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${pageHeight}px`);

  // Take screenshots at various scroll positions (every 900px = 1 viewport)
  const numScreenshots = Math.ceil(pageHeight / 900);
  for (let i = 0; i < numScreenshots; i++) {
    const y = i * 900;
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise(r => setTimeout(r, 300)); // Let scroll animations trigger
    await page.screenshot({
      path: `${DIR}/section-${String(i).padStart(2, '0')}-y${y}.png`,
      clip: { x: 0, y: y, width: 1440, height: 900 },
    });
    console.log(`Captured section ${i} at y=${y}`);
  }

  await browser.close();
  console.log('Done!');
}

main().catch(console.error);
