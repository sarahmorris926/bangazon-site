'use strict';

const { Router } = require('express');
const router = Router();
const { deleteProduct } = require('../controllers/productCtrl');

router.delete("/product/:id", deleteProduct);

module.exports = router;