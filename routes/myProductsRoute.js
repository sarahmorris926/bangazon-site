"use strict";

const { Router } = require('express');
const router = Router();
const { getUserProducts } = require('../controllers/productCtrl');

router.get('/myproducts', getUserProducts);

module.exports = router;