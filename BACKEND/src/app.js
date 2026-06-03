

require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

const registerUser = require('./routes/auth.register.routes')
const loginUser = require('./routes/auth.login.routes')
const walletAlter = require('./routes/wallet.alter.routes')
const userHistory = require('./routes/user.history.routes')
const userDetails = require('./routes/user.details.routes')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get('/', (req, res) =>{
    res.send("Hello World")
})

app.use('/api/auth', registerUser)

app.use('/api/auth', loginUser)

app.use('/change', walletAlter)

app.use('/user', userHistory)

app.use('/user', userDetails)



module.exports = app

