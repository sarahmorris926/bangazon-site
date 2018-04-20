const { Router } = require('express');
const router = Router();
const { addPaymentType } = require('../controllers/paymentTypeCtrl');

router.post('/payment-types', addPaymentType)

module.exports = router;