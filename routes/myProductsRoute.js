"use strict";

const { Router } = require('express');
const router = Router();
const { getUserProducts, deleteProduct } = require('../controllers/productCtrl');

router.get('/myproducts', getUserProducts);
router.delete('/myproducts/:id', deleteProduct);

module.exports = router;