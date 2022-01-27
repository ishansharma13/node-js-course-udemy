const products = [];
exports.getProductListing = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    res.render('shop',{prods: products,docTitle:'Shop',path: '/'});
}

exports.getAddProductPage = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.render('add-product',{docTitle: 'Add Product',path: '/admin/add-product'})
}

exports.postNewProduct = (req,res,next)=>{
    products.push({'title': req.body.title});
    res.redirect('/');
}