const { Router } = require('express');
const router = Router();
const { addPaymentType, displayPaymentTypeForm, getAllPaymentTypes } = require('../controllers/paymentTypeCtrl');

router.get('/payment-types', getAllPaymentTypes, displayPaymentTypeForm);
router.post('/payment-types', addPaymentType);

module.exports = router;