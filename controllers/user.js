let User =require('../models/user')
let cookieToken=require('../utils/cookieToken')

exports.getLogin=(req,res)=>{
    res.render('login')
}


exports.login = async (req,res)=>{
    const {username,password} = req.body
    
    let user=await User.find({username:username,password:password})

    if(!user){
        return res.redirect('/user/login')
    }
    // if(user.password!=password){
    //     return res.redirect('/user/login')
    // }
    cookieToken(user,res)
}
exports.getRegister=(req,res)=>{
    res.render('register')
}
exports.register=async(req,res)=>{
    let {username,password}=req.body
    await User.create({username:username,password:password})
    res.redirect('/')
}
exports.logout = async (req,res,next)=>{
    res.cookie('token',null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).redirect('/')
}