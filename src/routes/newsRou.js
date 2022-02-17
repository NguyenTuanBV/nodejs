const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController')
router.post('/create', newsController.create)

router.get('/:id', newsController.getId)

router.get('/:slug/edit', newsController.edit)

router.put('/:slug', newsController.update)

router.delete('/:slug', newsController.delete)

router.put('/:id', newsController.update)

router.get('/', newsController.index)

module.exports = router;