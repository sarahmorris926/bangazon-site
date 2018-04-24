"use strict";

const { Router } = require('express');
const router = Router();
const { getActiveOrder } = require('../controllers/productCtrl');

router.get("/cart", getActiveOrder);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

module.exports = router;
