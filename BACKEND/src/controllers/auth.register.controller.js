

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userModel = require('../models/user.model')



async function userRegister(req, res){
    // res.send("Register Here")

    const {username, email, password} = req.body
    
    // console.log(username, email, password)

    const exist = await userModel.findOne({
        email
    })

    if(exist){
        return res.status(409).send("User Already Exists... \nuse another email")
    }

    if (password.length < 8){
        return res.status(409).send("Password should be more than 8 characters")
    }


    let username2 = username.toLowerCase()
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username : username2,
        email,
        password : hashedPassword,
        wallet : 0
    })

    const token = jwt.sign({
        email : user.email,
        _id : user._id
    }, process.env.JWT_STRING)

    // console.log(token)
    res.cookie('token', token )


    res.status(201).send({
        message : "User Registered Successfully",
        user
    })
}


module.exports = {userRegister}