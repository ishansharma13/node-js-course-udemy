const express = require('express');

const app = express();

app.use('/users',(req,res,next)=>{
    console.log("Received request in the first middleware");
    res.send('<h1>In users</h1>');
})

app.use('/',(req,res,next)=>{
    console.log("In the second middleware");
    res.send("<h1>Hello from express!! (assignment-2)");
})

app.listen(3000);