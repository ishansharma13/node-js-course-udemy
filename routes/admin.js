const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/add-product',productController.getAddProductPage);
router.post('/product',productController.postNewProduct);

module.exports = router;
