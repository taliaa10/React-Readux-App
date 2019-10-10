const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/').post(productController.addProduct);
module.exports = router;
