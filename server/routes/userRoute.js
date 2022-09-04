const { json } = require('express');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

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

router.post('/login', async (req,res) =>{
    console.log("post reached login");

    const {email,password} = req.body;
    try {
        const user = await User.find({email,password})
        if(user.length > 0){
            const currentUser ={
                name: user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }

            res.status(200).send(currentUser)
        }else{
            res.status(400).json({
                message:'login failed'
            })
        }
    } catch (error) { 
        console.log("post login not reached");


        res.status(404).json({
            message:error
        })
    }
})

module.exports = router;