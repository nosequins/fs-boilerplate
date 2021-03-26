const router = require("express").Router()

const {Student, Campus, syncAndSeed}= require('../db');

router.get('/api/campuses', async(req, res, next)=>{
    try{
        const data= await Campus.findAll()
        res.send(data)

    }catch(err){
        next(err)
    } 
})
router.get('/api/students', async(req, res, next)=>{
    try{
        const data= await Student.findAll()
        res.send(data);

    }catch(err){
        next(err)
    } 
})

module.exports= router

