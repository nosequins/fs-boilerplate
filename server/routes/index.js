const router = require("express").Router()

const {Student, Campus}= require('../db');

router.get('/campuses', async(req, res, next)=>{
    try{
        const data= await Campus.findAll()
        res.status(200).send(data)

    }catch(err){
        next(err)
    }
})
router.get('/students', async(req, res, next)=>{
    try{
        const data= await Student.findAll();
        res.status(200).send(data);

    }catch(err){
        next(err)
    }
})

router.post('/students', async(req, res, next)=>{
    try{

        res.status(200).send(await Student.create(req.body));


    }catch(er){
        next(er)
    }

})
router.post('/campuses', async(req, res, next)=>{
    try{
        const newCamp= await Campus.create(req.body);
        res.status(200).send(newCamp);
    }catch(er){
        next(er)
    }

})
router.put('/students/:id', async(req, res, next)=>{
    try{
        const data= await Student.findByPk(req.params.id);
        res.status(200).send(await data.update(req.body));

    }catch(err){
        next(err)
    }
})
router.put('/campuses/:id', async(req, res, next)=>{
    try{
        const data= await Campus.findByPk(req.params.id)
        res.status(200).send(await data.update(req.body));

    }catch(err){
        next(err)
    }
})
router.delete('/students/:id', async(req, res, next)=>{
    try{
        const delStudent= await Student.findByPk(req.params.id)
        await delStudent.destroy();
        //you should always either res.send() or res.status() something back after a route, even when you're deleting
    }catch(er){
        next(er)
    }
})
router.delete('/campuses/:id', async(req, res, next)=>{
    try{
        const delCampus= await Campus.findByPk(req.params.id)
        await delCampus.destroy();
        //you should always either res.send() or res.status() something back after a route, even when you're deleting

    }catch(er){
        next(er)
    }
})


module.exports= router

