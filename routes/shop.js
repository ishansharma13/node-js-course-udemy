const express = require('express');
const path = require('path');
const adminData = require('./admin');
const products = adminData.products;
const router = express.Router();

router.get('/',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    res.render('shop',{prods: products,docTitle:'Shop',path: '/'});
});

module.exports=router;


