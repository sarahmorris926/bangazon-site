'use strict';

const { Router } = require('express');
const router = Router();



router.get('/', (req, res, next) => {
  res.render('index');
});

// pipe all other requests through the route modules
router.use(require('./authRoute'));
router.use(require('./productDetailRoute'));
<<<<<<< HEAD
router.use(require('./sellProductRoute'));
=======
router.use(require('./productRoute'));
>>>>>>> master
router.use(require('./paymentTypeRoute'));
router.use(require('./profileRoute'));
// router.use(require('./foo'));

module.exports = router;
