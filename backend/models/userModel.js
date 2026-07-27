const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username :{
        type: String,
        trim: true,//removes empty spaces before and after
        default: "User"
    },
    email:{
        type: String,
        default: "test@gmail.com"
    },
    age:{
        type: Number,
        default: 18
    },
    role:{
        type: String,
        default: "not defined"
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User;