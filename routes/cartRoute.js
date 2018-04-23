

'use strict';

const { Router } = require('express');
const router = Router();
const { postOrderProduct} = require('../controllers/productCtrl');


router.post("/cart", postOrderProduct);


module.exports = router;