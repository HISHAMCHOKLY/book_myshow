const express=require('express')
const { getHome } = require('../controllers/home')
const router=express.Router()



router
    .route('/')
    .get(getHome)



module.exports=router    