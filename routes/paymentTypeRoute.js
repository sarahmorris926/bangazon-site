const { Router } = require('express');
const router = Router();
const { addPaymentType, displayPaymentTypeForm } = require('../controllers/paymentTypeCtrl');

router.get('/payment-types', displayPaymentTypeForm);
router.post('/payment-types', addPaymentType);

module.exports = router;