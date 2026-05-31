



const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.login.controller')


router.get('/login', authController.userLogin)


module.exports = router