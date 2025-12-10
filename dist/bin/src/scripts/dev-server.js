import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import { transform } from 'esbuild';
const PORT = 3000;
const server = createServer(async (req, res) => {
    const urlPath = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.join(process.cwd(), 'src', urlPath);
    if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
    }
    // HTML
    if (filePath.endsWith('.html')) {
        const html = fs.readFileSync(filePath, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
        return;
    }
    // TS / TSX → JS
    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        try {
            const tsCode = fs.readFileSync(filePath, 'utf-8');
            const result = await transform(tsCode, {
                loader: filePath.endsWith('.tsx') ? 'tsx' : 'ts',
                format: 'esm'
            });
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(result.code);
            return;
        }
        catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('TS Compile Error: ' + err);
            return;
        }
    }
    // Other static files
    const ext = path.extname(filePath).slice(1);
    const contentType = ext === 'css' ? 'text/css' : 'text/plain';
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
});
server.listen(PORT, () => {
    console.log(`Radium dev server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=dev-server.js.map