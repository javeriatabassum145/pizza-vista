const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    number:{
        type:String,
        required:[true, 'Number is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required']
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timeStamps:true})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel;