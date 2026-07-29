const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    username :{
        type: String,
        trim: true,//removes empty spaces before and after
        default: "User"
    },
    email:{
        type: String,
        default: "test@gmail.com"
    },
    password:{
        type: String,
        default: "Test@123"
    },
    Otp:{
        type: String,
        default: null
    }
})

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin;