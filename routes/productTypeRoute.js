'use strict';

const { Router } = require('express');
const router = Router();

const { getAllProductCategories} = require('../controllers/productTypeCtrl.js');

// router.get('/product-types', getAllProductTypes);
// router.get('/product-types/:id', getProductTypeById);
router.get('/productCategories', getAllProductCategories);

module.exports = router;