const express = require('express');
const router = express.Router();
const { createCommande } = require('../controller/commandeController');
router.post('/createcommande', createCommande);
module.exports = router;
