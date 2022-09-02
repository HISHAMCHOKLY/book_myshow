require('dotenv').config()
const express=require('express')
const app=express()
const cookieParser=require('cookie-parser')

 
const connectDb=require('./config/database')
connectDb()

app.set('view engine','ejs')
app.use(express.static('static'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

let homeRoute=require('./routes/homeRoute')
let userRoute=require('./routes/userRoute')
let movieRoute=require('./routes/movieRoute')
let adminRoute=require('./routes/adminRoute')

app.use('/',homeRoute)

app.use('/admin',adminRoute)

app.use('/user',userRoute)

app.use('/movie',movieRoute)



app.listen(3000,'',()=>{
    console.log("started");
})