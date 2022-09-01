const cookieToken=async(user,res)=>{
    console.log();

    const token = user[0].username
    let goto=user[0].username?'/':'/user/login'
    const options = {
        expires: new Date(Date.now()+8*24*60*60*1000),
        httpOnly:true
    }
    return res.cookie('token', token ).redirect(`${goto}`)
}

module.exports = cookieToken