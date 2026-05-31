
const jwt = require('jsonwebtoken')
const bycrypt = require('bcrypt');

const userModel = require('../models/user.model')


async function userLogin(req, res) {

    const {username, email, password} = req.body

    // console.log(username, email, password) 
    
    const exist = await userModel.findOne({
        email
    })

    if(!exist){
        return res.status(404).send("User Not Found")
    }

    const isMatch = await bycrypt.compare(password, exist.password)

    if(!isMatch){
        return res.status(401).send("Incorrect Password")
    }

    const token = jwt.sign({
        email : exist.email,
        _id : exist._id
    }, process.env.JWT_STRING)

    res.cookie('token', token)

    res.status(200).send("Login Success")
}


module.exports = {userLogin}