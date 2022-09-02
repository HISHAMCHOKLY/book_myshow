let Movie = require('../models/movie')
let Seat=require('../models/seatBooking')


exports.getMovie=async(req,res)=>{
    let token=req.cookies.token
    let moviename=req.params.moviename
    let cmovie=await Movie.findOne({moviename:moviename})
    console.log(cmovie);
    res.render('moviepage',{token,cmovie})
}

exports.getBooking=async(req,res)=>{
    let moviename=req.params.moviename
    let cmovie=await Movie.findOne({moviename:moviename})
    res.render('booking',{cmovie})
}

exports.getSeatSelect=async(req,res)=>{
    let {moviename,theatre,time}=req.params
    let cthatre= await Seat.findOne({moviename:moviename,theatre:theatre,time:time})
    res.render('seatSelect',{cthatre})
}