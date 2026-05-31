


const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.register.controller')

router.post('/register', authController.userRegister)


module.exports = router