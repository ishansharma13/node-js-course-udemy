const fs = require('fs');

const requestHandler = (req,res) =>{
const url = req.url;
const method = req.method.toLowerCase();

if (url === "/"){
    res.setHeader("Content-Type","text/html");
    fs.readFile(__dirname+'/home.html','utf8',(err,data)=>{
        if (err){
            console.error(err);
        }else{
            res.write(`${data}`);
            res.end(); 
        }
        
    });  
}
else if (url === "/users"){
    res.setHeader("Content-Type","text/html");
    fs.readFile(__dirname+'/users.html','utf8',(err,data)=>{
        if (err){
            console.error(err);
        }else{
            res.write(`${data}`);
            res.end(); 
        }
        
    });
    
}else if (url ==="/create-user" && method === "post"){
    const body = [];
    req.on('data',chunk=>{
        body.push(chunk);
    })
    req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        res.statusCode = 302;
        res.setHeader("Location","/");
        res.end();
    })
}
}
module.exports = requestHandler;