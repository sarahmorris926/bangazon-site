'use strict';

const { Router } = require('express');
const router = Router();
const { getProductDetails } = require('../controllers/productDetailCtrl');


router.get("/product/:id", getProductDetails);

module.exports = router;