import fs from 'fs';
import path from 'path';
export async function generateStaticPages(pages, outDir = 'dist') {
    if (!fs.existsSync(outDir))
        fs.mkdirSync(outDir, { recursive: true });
    for (const page of pages) {
        const html = `<html><body><div id="app">${await renderPage(page)}</div></body></html>`;
        const fileName = page === '/' ? 'index.html' : `${page}.html`;
        fs.writeFileSync(path.join(outDir, fileName), html);
    }
}
async function renderPage(page) {
    // Example: simplistic render, can integrate radium-core renderers
    return `<h1>Static Page: ${page}</h1>`;
}
//# sourceMappingURL=ssg.js.map