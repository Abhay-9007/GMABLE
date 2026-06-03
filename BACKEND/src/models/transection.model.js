


const mongoose = require("mongoose")

// const now = new Date();

// const dateTime =
// `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

// console.log(dateTime);

const transectionSchema = new mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    balance : {
        type : Number,
        required : true
    },
    date : {
        type : String,
        default : () => {
            const now = new Date();

            return `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        }
    },
    type : {
        type : String,
    }
})


const transectionModel = mongoose.model("transection", transectionSchema)

module.exports = transectionModel
