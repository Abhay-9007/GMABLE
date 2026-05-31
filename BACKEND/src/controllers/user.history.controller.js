


const jwt = require('jsonwebtoken')

const transectionModel = require('../models/transection.model')
const userModel = require('../models/user.model')

async function userHistory(req, res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).send("Unauthorized")
    }   

    try{
        const decoded = jwt.verify(token, process.env.JWT_STRING)
        // console.log(decoded)

        const user = await userModel.findById(decoded._id)

        if(user.email !== decoded.email){
            return res.status(401).send("Unauthorized")
        }

        const history = await transectionModel.find({
            userID : user._id
        })

        res.status(200).send(history)

    }catch(err){
        console.log(err)
    }
}


module.exports = {userHistory}