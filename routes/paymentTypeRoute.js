"use strict";

const { Router } = require('express');
const router = Router();
const { addPaymentType, displayPaymentTypeForm, getAllPaymentTypes } = require('../controllers/paymentTypeCtrl');


router.get('/payment-types', getAllPaymentTypes, displayPaymentTypeForm);
router.post('/payment-types', addPaymentType);
router.get('/payment-types', isLoggedIn, getAllPaymentTypes, displayPaymentTypeForm);
router.post('/payment-types', isLoggedIn, addPaymentType);

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}



module.exports = router;