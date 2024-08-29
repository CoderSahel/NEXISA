const express = require('express');
const router = express.Router();
const { createRegister } = require('../controllers/registerControllers');

router.post('/create-register', createRegister);

module.exports = router;