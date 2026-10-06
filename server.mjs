import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const page = await readFile(new URL('./public/index.html', import.meta.url));
createServer((req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (path === '/health') { res.writeHead(200, {'Content-Type': 'application/json'}); res.end('{"status":"ok"}'); return; }
  if (path === '/' || path === '/index.html') { res.writeHead(200, {'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff'}); res.end(page); return; }
  res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
  res.end('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Veloce</title><body style="background:#050607;color:#eaeef0;font:20px sans-serif;padding:60px"><h1>Conteúdo em preparação</h1><p>Esta página ainda não está disponível.</p><a href="/" style="color:#32d9d9">Voltar ao site Veloce</a></body></html>');
}).listen(Number(process.env.PORT || 3000), '0.0.0.0');
