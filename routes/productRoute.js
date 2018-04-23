'use strict';

const { Router } = require('express');
const router = Router();
const { getLatestProducts, deleteProduct } = require('../controllers/productCtrl');

router.delete("/product/:id", deleteProduct);
router.get("/home", getLatestProducts);

module.exports = router;