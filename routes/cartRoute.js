'use strict';

const { Router } = require('express');
const router = Router();
const { postOrder} = require('../controllers/productCtrl');


router.get("/cart/:id", postOrder);


module.exports = router;