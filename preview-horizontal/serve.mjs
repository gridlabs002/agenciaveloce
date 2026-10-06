import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,resolve,sep} from 'node:path';
const root=resolve(import.meta.dirname),types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp'};
createServer(async(req,res)=>{try{const path=decodeURIComponent(new URL(req.url,'http://localhost').pathname),file=resolve(root,'.'+(path==='/'?'/index.html':path));if(!file.startsWith(root+sep)||!types[extname(file)]){res.writeHead(404);res.end();return;}const data=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)],'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(data)}catch{res.writeHead(404);res.end()}}).listen(4173,'0.0.0.0',()=>console.log('Veloce conceito horizontal: http://localhost:4173'));
