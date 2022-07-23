const mongoose=require("mongoose");

const User=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
       },
    email:{
        type:String,
       },
    createAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('User',User);