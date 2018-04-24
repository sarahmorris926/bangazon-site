'use strict';

const { Router } = require('express');
const router = Router();
const { getUser } = require('../controllers/profileCtrl');

router.get("/profile/:id", getUser);

module.exports = router;