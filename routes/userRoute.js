const express=require('express')
const { login, getlogin, register, getRegister, getLogin, logout } = require('../controllers/user')
const router=express.Router()


router
    .route('/login')
    .get(getLogin)
    .post(login)

router
    .route('/register')
    .get(getRegister)
    .post(register)

router
    .route('/logout')
    .get(logout)


module.exports=router        