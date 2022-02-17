const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController')


router.get('/course', homeController.searchCourse)

router.post('/create', homeController.create)

router.get('/:id', homeController.getId)

router.put('/:id', homeController.update)

router.delete('/:id', homeController.deleteId)

router.get('/', homeController.index)

module.exports = router;