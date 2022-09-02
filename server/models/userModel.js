const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email required']
    },
    password:{
        type:String,
        required:[true,'Password required']
    },
    isAdmim:{
        type:Boolean,
        default:false
    }

},{timeStamps:true})

module.exports = mongoose.model('User',userSchema);