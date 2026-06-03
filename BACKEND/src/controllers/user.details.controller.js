
const jwt = require('jsonwebtoken')

const userModel = require('../models/user.model')

async function userDetails(req, res){
    
    const token  = req.cookies.token

    if(!token){
        return res.status(401).send("Unauthorized")
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_STRING)
        const data = await userModel.findById(decoded._id)
        return res.status(200).send({
            username : data.username,
            email : data.email,
            wallet : data.wallet
        })

    }catch(err){
        return res.status(401).send("Unauthorized",err)
    }


}


module.exports = {userDetails}