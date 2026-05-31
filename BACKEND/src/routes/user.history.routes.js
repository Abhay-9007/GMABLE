


const express = require('express')
const router = express.Router()

const historyController = require('../controllers/user.history.controller')


router.get('/history', historyController.userHistory)  


module.exports = router