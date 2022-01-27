const express = require('express');

const productController = require('../controllers/product');
const router = express.Router();

router.get('/',productController.getIndex);

module.exports=router;


