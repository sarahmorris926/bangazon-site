'use strict';

const { Router } = require('express');
const router = Router();
const { getLatestProducts, deleteProduct, displayProductsByCategory } = require('../controllers/productCtrl');


router.delete("/product/:id", deleteProduct);
router.get("/home", getLatestProducts);
router.get('/products/:id', displayProductsByCategory);

module.exports = router;