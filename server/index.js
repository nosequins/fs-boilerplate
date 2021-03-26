const express = require("express")
const app= express()
const {Student, Campus,db, syncAndSeed}= require('./db')
const morgan= require('morgan')
const path= require('path')
const { urlencoded } = require('express');
const router = require('./routes')
//--ignore client --ignore server/public
//initialize app
//require morgan|volleyball, path packages
//require db from /db
app.use(urlencoded({extended:false}))
// app.use(express.json())
app.use('/',express.static(path.join(__dirname,'public')));
app.use('/', router)
app.get('/', (req, res, next)=>{
    try{
        res.sendFile(path.join(__dirname,'..','/client','index.html'))
        
    }
    catch(err){
        next(err)
    }
})
//use morgan|volleyball
//use express.json()
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!

//require in your routes and use them on your api path

//404 handler

//500 handler
//set PORT

//listen
const init=async ()=>{
    try{
        await db.sync({force:true})
        await syncAndSeed()
        const port= process.env.PORT || 3000
    app.listen(port,
        ()=> (console.log(`App listening on port ${port}`)))
    }
    catch(err){
        console.log(err)
    }
}
init()
