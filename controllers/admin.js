let Movie = require('../models/movie')
let Seat=require('../models/seatBooking')


exports.getAddmovie=(req,res)=>{
    res.render('adminhome')
}

exports.Addmovie=async(req,res)=>{
    let{moviename,duration,type,posterurl,releasedate,time,language,theator,mallikaseat}=req.body
    await Movie.create({movieid:Date.now(),moviename:moviename,duration:duration,type:type,posterurl:posterurl,releasedate:releasedate,language:language,theators:{name:theator,seat:mallikaseat,time:time}})
    let createSeat=[]
    for( let i=1;i<=mallikaseat;i++){
        createSeat.push({seatNo:i,name:null})
    }
    await Seat.create({moviename:moviename,theator:theator,time:time,seats:createSeat})
    res.render('adminhome')
}