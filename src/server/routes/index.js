/**
 * Routes
 */

//Modules
const express = require('express')
const router = express.Router();

//Controllers
const userController = require('../controllers/user.ctrl')

/**
 * Users
 */

router.post('/user/create', userController.create)
router.get('/user/:username', userController.findUser)
router.post('/user/login', userController.login)

module.exports = router