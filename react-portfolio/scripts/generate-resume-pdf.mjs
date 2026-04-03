#!/usr/bin/env node
import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const PDF_PATH = resolve(ROOT, 'public/assets/resume/JD-McCulley-Resume-2026.pdf');
const PORT = process.env.PORT || 3003;
const BASE_URL = `http://localhost:${PORT}`;

async function isServerRunning() {
  try {
    const res = await fetch(`${BASE_URL}/resume/`, { redirect: 'follow' });
    return res.status < 500;
  } catch {
    return false;
  }
}

async function waitForServer(maxWait = 60_000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    if (await isServerRunning()) return;
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error('Dev server did not start within 60s');
}

async function main() {
  let serverProcess = null;

  if (!(await isServerRunning())) {
    console.log('Starting dev server...');
    serverProcess = spawn('npx', ['next', 'dev', '--port', String(PORT), '--turbopack'], {
      cwd: ROOT,
      stdio: 'ignore',
    });
    await waitForServer();
    console.log('Dev server ready.');
  } else {
    console.log('Dev server already running.');
  }

  try {
    const { chromium } = await import('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(`${BASE_URL}/resume/`, { waitUntil: 'networkidle' });

    // Hide dev-only overlays and force white background everywhere
    await page.addStyleTag({ content: `
      html, body, body > *, body > * > * {
        background: #fff !important;
        background-color: #fff !important;
      }
      [data-react-grab], #__react-grab-root, [id*="react-grab"],
      [data-figma-capture] { display: none !important; }
    ` });

    await page.pdf({
      path: PDF_PATH,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
    });

    await browser.close();
    console.log(`PDF saved to ${PDF_PATH}`);
  } finally {
    if (serverProcess) {
      serverProcess.kill();
      console.log('Dev server stopped.');
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
