const mongoose=require('mongoose')
let seatBooking=new mongoose.Schema({moviename:String,theator:String,time:String,seats:Array})
module.exports=mongoose.model('Seat',seatBooking)