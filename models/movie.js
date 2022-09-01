const mongoose=require('mongoose')
let movieschema=new mongoose.Schema({movieid:Number,moviename:String,releasedate:String,language:String,duration:String,type:String,posterurl:String,rating:Array,theators:Object})
module.exports=mongoose.model('Movie',movieschema)
