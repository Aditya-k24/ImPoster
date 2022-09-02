const { json } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
console.log("post reached this one");

router.post('/register',(req,res) =>{
    console.log("post reached");

    const {name,email,password} = req.body;
    const newUser = new User({name,email,password});
    try {
        newUser.save();
        console.log("post reached");
        res.status(200).json({
            success:true,
            message: "Register success",
        })
    } catch (error) { 
        console.log("post not reached");

        res.status(400).json({
            message:error
        })
    }
})

module.exports = router;