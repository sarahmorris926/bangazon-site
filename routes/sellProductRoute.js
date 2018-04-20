'use strict';

const { Router } = require('express');
const router = Router();
const { displaySellProduct, sellProduct } = require('../controllers/sellProductCtrl');

router.get('/sell', displaySellProduct);
router.post('/sell', sellProduct)

module.exports = router;