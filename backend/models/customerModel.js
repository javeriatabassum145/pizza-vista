const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
    emailadd:{
        type:String,
        required:[true, 'Email is required']
    },
    address:{
        type:String,
        required:[true, 'Address is required']
    },
    inst:{
        type:String,
    }
},{timeStamps:true})

const customerModel = mongoose.model('Customer', customerSchema)
module.exports = customerModel;