

const mongoose = require('mongoose')


async function ConnectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    }catch(err){
        console.error("Failed to connect with DB", err)
    }
}

module.exports = ConnectDB