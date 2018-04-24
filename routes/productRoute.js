'use strict';

const { Router } = require('express');
const router = Router();
const { getLatestProducts, displayProductsByCategory} = require('../controllers/productCtrl');

router.get("/home", getLatestProducts);
router.get('/products/:id', displayProductsByCategory);

module.exports = router;