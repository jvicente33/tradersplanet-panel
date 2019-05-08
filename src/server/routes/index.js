/**
 * Routes
 */

//Modules
const express = require('express')
const router = express.Router();

//Controllers
const userController = require('../controllers/user.ctrl')
const educationController = require('../controllers/education.ctrl')

/**
 * Users
 */

router.post('/user/create', userController.create)
router.get('/user/:username', userController.findUser)
router.post('/user/login', userController.login)

/**
 * Education
 */

router.post('/education/create', educationController.create)
router.get('/education/all', educationController.findAllEducation)
router.get('/education/:id', educationController.findEducation)
router.put('/education/:id', educationController.editEducation)

module.exports = router