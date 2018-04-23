

'use strict';

const { Router } = require('express');
const router = Router();
const { postOrderProduct} = require('../controllers/productCtrl');


router.post("/cart/:id", postOrderProduct);


module.exports = router;