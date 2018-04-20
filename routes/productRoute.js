'use strict';

const { Router } = require('express');
const router = Router();
const { getLatestProducts } = require('../controllers/productCtrl');

router.get("/allproducts", getLatestProducts);

module.exports = router;