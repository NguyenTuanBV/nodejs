const express = require('express');
const router = express.Router();

const myNewsController = require('../app/controllers/MyNewsController')

router.get('/stored/news', myNewsController.storedNews)

module.exports = router;