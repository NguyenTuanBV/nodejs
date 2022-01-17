const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/UserController')

router.get('/:id', loginController.getId)

router.get('/', loginController.index)


module.exports = router;