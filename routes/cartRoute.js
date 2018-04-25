"use strict";

const { Router } = require('express');
const router = Router();
const { postOrderProduct, getActiveOrder, completeOrder } = require('../controllers/productCtrl');

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

router.get("/cart", getActiveOrder);
router.post("/cart/:id", postOrderProduct, isLoggedIn);
router.patch("/payment/:id", completeOrder);

module.exports = router;

