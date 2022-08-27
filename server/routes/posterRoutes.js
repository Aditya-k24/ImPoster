const { json } = require('express');
const express = require('express');
const router = express.Router();
const posterModel = require('../models/posterModel')

//GET all posters

router.get('/getAllPosters', async (req,res) => {
    try{
        const posters =await posterModel.find({})
        res.send(posters)
    }catch(e){
        res,json({message:e})
    }
})

module.exports = router;