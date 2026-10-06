import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
const root = resolve(import.meta.dirname, 'public');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp' };
createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (path === '/health') { res.writeHead(200, {'Content-Type': 'application/json'}); res.end('{"status":"ok"}'); return; }
    const file = resolve(root, '.' + (path === '/' ? '/index.html' : path));
    if (file.startsWith(root + sep) && types[extname(file)]) {
      const data = await readFile(file);
      res.writeHead(200, {'Content-Type': types[extname(file)], 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-cache'});
      res.end(req.method === 'HEAD' ? undefined : data); return;
    }
  } catch { /* Unknown or malformed paths use the same unavailable response. */ }
  res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Veloce</title><body style="background:#050607;color:#eaeef0;font:20px sans-serif;padding:60px"><h1>Conteúdo em preparação</h1><p>Esta página ainda não está disponível.</p><a href="/" style="color:#32d9d9">Voltar ao site Veloce</a></body></html>');
}).listen(Number(process.env.PORT || 3000), '0.0.0.0');
