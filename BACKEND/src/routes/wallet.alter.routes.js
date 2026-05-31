


const express = require('express')
const router = express.Router()

const walletController = require('../controllers/wallet.alter.controller')

router.post('/wallet' , walletController.walletAlter)

module.exports = router