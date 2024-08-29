const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactControllers');

router.post('/create-contact', createContact);

module.exports = router;