exports.isLoggedin = async (req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        return res.redirect('/user/login')
    }
    req.username=token.user
    next()
}
