"use strict";

const { Router } = require('express');
const router = Router();
const { getUserProducts, deleteProduct } = require('../controllers/productCtrl');

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

router.get('/myproducts', getUserProducts, isLoggedIn);
router.delete('/myproducts/:id', isLoggedIn, deleteProduct, getUserProducts);

module.exports = router;