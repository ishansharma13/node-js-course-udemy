// const products = [];
const Product = require('../models/product');
exports.getProductListing = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    const products = Product.fetchAll(products =>{
        res.render('shop',{prods: products,docTitle:'Shop',path: '/'});
    });
    
}

exports.getAddProductPage = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.render('add-product',{docTitle: 'Add Product',path: '/admin/add-product'})
}

exports.postNewProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}