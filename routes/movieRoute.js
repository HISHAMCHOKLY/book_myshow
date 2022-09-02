const express=require('express')
const { getMovie, getBooking, getSeatSelect } = require('../controllers/movie')
const { isLoggedin } = require('../middlewares/md1')
const router=express.Router()



router
    .route('/:moviename')
    .get(isLoggedin,getMovie)


router
    .route('/:moviename/booking')
    .get(getBooking)    

router
    .route('/:moviename/:theatre/:time')
    .get(getSeatSelect)    
    

module.exports=router    
