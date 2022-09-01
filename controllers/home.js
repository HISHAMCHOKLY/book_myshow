let User =require('../models/user')
let cookieToken=require('../utils/cookieToken')
const Movie = require('../models/movie')


exports.getHome=async(req,res)=>{
    let movies=await Movie.find()
    let token=req.cookies.token
    res.render('index',{token,movies})
}