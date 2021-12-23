const http = require('http');
const fs = require('fs');
//creates a server

const home = fs.readFileSync(__dirname+'/home.html','utf8');
const about = fs.readFileSync(__dirname+'/about.html','utf8');
const server = http.createServer((req,res)=>{
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if (url === "/"){
        res.write(`${home}`);
        
    }
    else if(url === "/about"){
        res.write(`${about}`);
    }
    res.end();
    
    

});

server.listen(3000);