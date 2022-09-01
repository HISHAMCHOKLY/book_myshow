const express=require('express')
const { getMovie } = require('../controllers/movie')
const { isLoggedin } = require('../middlewares/md1')
const router=express.Router()



router
    .route('/:moviename')
    .get(isLoggedin,getMovie)

module.exports=router    
