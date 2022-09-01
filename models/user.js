const mongoose=require('mongoose')
let userschema=new mongoose.Schema({username:String,password:String})
module.exports=mongoose.model('User',userschema)