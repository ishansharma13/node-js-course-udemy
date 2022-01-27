const express = require('express');

const productController = require('../controllers/product');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/',productController.getIndex);
router.get('/all-products',productController.getProductListing);
router.get('/checkout',shopController.getCheckout);
router.get('/cart',shopController.getCart);
router.get('/orders',shopController.getOrders);
module.exports=router;


