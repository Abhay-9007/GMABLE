

const jwt = require('jsonwebtoken')

const userModel = require('../models/user.model')
const transectionModel = require('../models/transection.model')


async function walletAlter(req, res){

    const {amount} = req.body

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

        if(user.wallet + amount < 0){
            return res.status(401).send("Insufficient Balance")
        }
        
        user.wallet = user.wallet + amount

        await user.save()

        await transectionModel.create({
            userID : user._id,
            amount,
            balance : user.wallet
        })

        res.status(200).send(`Wallet Altered... \namount = ${amount}, \nbalance = ${user.wallet}`)
    }catch(err){
        console.error(err)
        res.status(401).send("Unauthorized")
    }

    
}


module.exports = {walletAlter}  