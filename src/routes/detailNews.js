const express = require('express');
const router = express.Router();

const detailNewsController = require('../app/controllers/DetailNewsController')


router.get('/create', detailNewsController.create)
router.post('/store', detailNewsController.store)
router.get('/:slug', detailNewsController.show)


module.exports = router;