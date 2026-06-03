

const express = require('express')
const router = express.Router()

const userDetailsController = require('../controllers/user.details.controller')

router.get('/details',  userDetailsController.userDetails)


module.exports = router