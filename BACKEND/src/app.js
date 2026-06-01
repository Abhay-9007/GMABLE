

require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

const registerUser = require('./routes/auth.register.routes')
const loginUser = require('./routes/auth.login.routes')
const walletAlter = require('./routes/wallet.alter.routes')
const userHistory = require('./routes/user.history.routes')

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) =>{
    res.send("Hello World")
})

app.use('/api/auth', registerUser)

app.use('/api/auth', loginUser)

app.use('/change', walletAlter)

app.use('/user', userHistory)





module.exports = app

