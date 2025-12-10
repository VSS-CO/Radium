import fs from 'fs';
import path from 'path';

export async function generateStaticPages(pages: string[], outDir = 'dist') {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const page of pages) {
    const html = `<html><body><div id="app">${await renderPage(page)}</div></body></html>`;
    const fileName = page === '/' ? 'index.html' : `${page}.html`;
    fs.writeFileSync(path.join(outDir, fileName), html);
  }
}

async function renderPage(page: string): Promise<string> {
  // Example: simplistic render, can integrate radium-core renderers
  return `<h1>Static Page: ${page}</h1>`;
}
