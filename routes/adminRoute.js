const express=require('express')
const { getAddmovie, Addmovie } = require('../controllers/admin')
const router=express.Router()


router
    .route('/addmovie')
    .get(getAddmovie)
    .post(Addmovie)

module.exports=router   