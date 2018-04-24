"use strict";

const { Router } = require('express');
const router = Router();
const { addPaymentType, displayPaymentTypeForm, getAllPaymentTypes } = require('../controllers/paymentTypeCtrl');

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

router.get('/payment-types', isLoggedIn, getAllPaymentTypes, displayPaymentTypeForm);
router.post('/payment-types', isLoggedIn, addPaymentType);

module.exports = router;