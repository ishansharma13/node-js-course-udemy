const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const users = [];
app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/users',(req,res,next)=>{
    users.push({name: req.body.name})
    // console.log(req.body);
    console.log("Received request in the first middleware");
    // res.sendFile(path.join(__dirname,'views','users.html'));
    res.render('users',{users: users,pageTitle: 'Home'})
})

app.get('/',(req,res,next)=>{
    console.log("In the second middleware");
    // res.sendFile(path.join(__dirname,'views','home.html'));
    res.render('home',{pageTitle: 'Home'});
})

app.listen(3000);