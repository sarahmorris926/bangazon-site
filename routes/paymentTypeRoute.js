"use strict";

const { Router } = require('express');
const router = Router();
const { addPaymentType, displayPaymentTypeForm, getAllPaymentTypes, selectPaymentType } = require('../controllers/paymentTypeCtrl');

router.get('/payment-types', getAllPaymentTypes, displayPaymentTypeForm);
router.post('/payment-types', addPaymentType);
router.get('/complete-order', selectPaymentType);

module.exports = router;