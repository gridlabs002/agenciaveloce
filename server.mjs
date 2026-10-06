import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
const root = resolve(import.meta.dirname, 'public');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8' };
createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (path === '/health') { res.writeHead(200, {'Content-Type': 'application/json'}); res.end('{"status":"ok"}'); return; }
    if (path === '/velocemkt-blog') { res.writeHead(301, {Location: '/blog'}); res.end(); return; }
    if (path.endsWith('/') && path !== '/') { res.writeHead(301, {Location: path.slice(0, -1)}); res.end(); return; }
    const routes = path === '/blog' || /^\/blog\/[a-z0-9-]+$/.test(path);
    if (path.endsWith('/index.html')) { res.writeHead(301, {Location: path.slice(0, -11) || '/'}); res.end(); return; }
    const file = resolve(root, '.' + (path === '/' ? '/index.html' : routes ? path + '/index.html' : path));
    if (file.startsWith(root + sep) && types[extname(file)]) {
      const data = await readFile(file);
      res.writeHead(200, {'Content-Type': types[extname(file)], 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache'});
      res.end(req.method === 'HEAD' ? undefined : data); return;
    }
  } catch { /* Unknown or malformed paths use the same unavailable response. */ }
  res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Veloce</title><body style="background:#050607;color:#eaeef0;font:20px sans-serif;padding:60px"><h1>Conteúdo em preparação</h1><p>Esta página ainda não está disponível.</p><a href="/" style="color:#32d9d9">Voltar ao site Veloce</a></body></html>');
}).listen(Number(process.env.PORT || 3000), '0.0.0.0');
