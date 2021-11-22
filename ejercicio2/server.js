const http = require('http');
const fs = require('fs');
const path = require('path');
const { publicDecrypt } = require('crypto');

http.createServer((req, res) =>{
    console.log(`${req.method} solicita ${res.url}`);

    if(req.url == '/'){
        fs.readFile('./public/profile.html', 'UTF-8', (err, html) =>{
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(html);
        });
    }else if(req.url.match(/.css$/)){
        const reqPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(reqPath, 'UTF-8');
        res.writeHead(200, {'content-type': 'text/css'})
        fileStream.pipe(res);
    }else if(req.url.match(/.js$/)){
        const reqPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(reqPath, 'UTF-8');
        res.writeHead(200, {'content-type': 'text/javascript'})
        fileStream.pipe(res);
    }else if(req.url.match(/.jpg$/)){
        const reqPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(reqPath);
        res.writeHead(200, {'content-type': 'image/jpg'})
        fileStream.pipe(res);
    }else if(req.url.match(/.png$/)){
        const reqPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(reqPath);
        res.writeHead(200, {'content-type': 'image/png'})
        fileStream.pipe(res);
    }else if(req.url.match(/.woff$/)){
        const reqPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(reqPath);
        res.writeHead(200, {'content-type': 'font/woff'})
        fileStream.pipe(res);
    }else{
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('404 ERROR');
    }
}).listen(3200);
console.log('Servidor Iniciando...');