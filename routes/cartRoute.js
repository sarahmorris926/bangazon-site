"use strict";

const { Router } = require('express');
const router = Router();
const { getActiveOrder } = require('../controllers/productCtrl');

router.get("/cart", getActiveOrder);

module.exports = router;
