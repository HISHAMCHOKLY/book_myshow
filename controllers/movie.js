let Movie = require('../models/movie')


exports.getMovie=async(req,res)=>{
    let token=req.cookies.token
    let moviename=req.params.moviename
    let cmovie=await Movie.findOne({moviename:moviename})
    console.log(cmovie);
    res.render('moviepage',{token,cmovie})
}