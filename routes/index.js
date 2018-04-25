'use strict';

const { Router } = require('express');
const router = Router();



router.get('/', (req, res, next) => {
  res.render('index');
});

// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./productDetailRoute'));
router.use(require('./cartRoute'));
router.use(require('./sellProductRoute'));
router.use(require('./productRoute'));
router.use(require('./paymentTypeRoute'));
router.use(require('./profileRoute'));
router.use(require('./cartRoute'));
router.use(require('./myProductsRoute'));
router.use(require('./productTypeRoute'));
router.use(require('./allProductsRoute'));

module.exports = router;
