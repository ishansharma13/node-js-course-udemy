const http = require('http');
const fs = require('fs');
//creates a server

const home = fs.readFileSync(__dirname+'/home.html','utf8'); // synchronous
const about = fs.readFileSync(__dirname+'/about.html','utf8'); // synchronous
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    console.log(method);
    
    if (url === "/"){
        res.setHeader('Content-Type','text/html');
        res.write(`${home}`);
        
    }
    else if(url === "/about"){
        res.setHeader('Content-Type','text/html');
        res.write(`${about}`);
    }
    else if(url === "/message" && method.toLowerCase() === "post"){
        const body = [];
        req.on('data',chunk =>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.statusCode = 302;
        res.setHeader("Location","/");
    }
    res.end();
    
    

});

server.listen(3000);