// const products = [];
const Product = require('../models/product');
exports.getProductListing = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    const products = Product.fetchAll(products =>{
        res.render('shop/product-listing',{prods: products,docTitle:'All Products',path: '/all-products'});
    });
    
}
exports.getIndex = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    const products = Product.fetchAll(products =>{
        const featuredProducts = products.length>0?[products[products.length-1]]:[];
        res.render('shop/index',{prods: featuredProducts,docTitle:'Featured Products',path: '/'});
    });
    
}
exports.getAddProductPage = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.render('admin/add-product',{docTitle: 'Add Product',path: '/admin/add-product'})
}

exports.postNewProduct = (req,res,next)=>{
    const product = new Product({...req.body});
    product.save();
    res.redirect('/');
}