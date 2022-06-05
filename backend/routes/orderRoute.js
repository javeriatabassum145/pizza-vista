const express = require('express')
const router = express.Router();
const Customer = require('../models/customerModel')


router.post('/placeorder', async (req,res) => {
    
    const {emailadd, address, inst, cartItems} = req.body
    const customer = new Customer({emailadd, address, inst, cartItems})
    try {
        customer.save()
        res.status(200).json({
            success:true,
            message:'Order success'
        })
    } catch (error) {
        res.status(400).json({
            message: "Something went wrong",
            error: error.stack
        })
    }

})

module.exports = router;