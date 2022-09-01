let Movie = require('../models/movie')


exports.getAddmovie=(req,res)=>{
    res.render('adminhome')
}

exports.Addmovie=async(req,res)=>{
    let{moviename,duration,type,posterurl,releasedate,language,mallika,mallikaseat}=req.body
    await Movie.create({movieid:Date.now(),moviename:moviename,duration:duration,type:type,posterurl:posterurl,releasedate:releasedate,language:language,theators:{name:mallika,seat:mallikaseat}})
    res.render('adminhome')
}