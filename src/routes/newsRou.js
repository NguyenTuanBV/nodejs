const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')

router.post('/create', newsController.create)

router.get('/:id', newsController.getId)

router.put('/:id', newsController.update)

router.delete('/:id', newsController.deleteId)

router.get('/', newsController.index)

module.exports = router;