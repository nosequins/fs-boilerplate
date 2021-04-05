const router = require("express").Router()

const {Student, Campus}= require('../db');

router.get('/campuses', async(req, res, next)=>{
    try{
        const data= await Campus.findAll()
        res.send(data)

    }catch(err){
        next(err)
    } 
})
router.get('/students', async(req, res, next)=>{
    try{
        const data= await Student.findAll();
        res.send(data);

    }catch(err){
        next(err)
    } 
})

router.post('/students', async(req, res, next)=>{
    try{
        
        res.send(await Student.create(req.body));
        
        
    }catch(er){
        next(er)
    }

})
router.post('/campuses', async(req, res, next)=>{
    try{
        const newCamp= await Campus.create(req.body);
        res.send(newCamp);
    }catch(er){
        next(er)
    }

})
router.put('/students/:id', async(req, res, next)=>{
    try{
        const data= await Student.findByPk(req.params.id);
        res.send(await data.update(req.body));

    }catch(err){
        next(err)
    } 
})
router.put('/campuses/:id', async(req, res, next)=>{
    try{
        const data= await Campus.findByPk(req.params.id)
        res.send(await data.update(req.body));

    }catch(err){
        next(err)
    } 
})
router.delete('/students/:id', async(req, res, next)=>{
    try{
        const delStudent= await Student.findByPk(req.params.id)
        await delStudent.destroy();

    }catch(er){
        next(er)
    }
})
router.delete('/campuses/:id', async(req, res, next)=>{
    try{
        const delCampus= await Campus.findByPk(req.params.id)
        await delCampus.destroy();
        

    }catch(er){
        next(er)
    }
})


module.exports= router

