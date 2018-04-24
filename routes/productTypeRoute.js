'use strict';

const { Router } = require('express');
const router = Router();

const { getAllProductCategories} = require('../controllers/productTypeCtrl.js');

router.get('/productCategories', getAllProductCategories);

module.exports = router;