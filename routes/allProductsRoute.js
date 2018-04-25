'use strict';

const { Router } = require('express');
const router = Router();
const { getAllProducts } = require('../controllers/productCtrl');

router.get("/allProducts", getAllProducts);

module.exports = router;