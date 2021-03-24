/* const { Router } = require('express'); */
const express = require('express');
const router = express.Router();




const courses = [
    {id:1 , name:'course1'},
    {id:2 , name:'course2'},
    {id:3 , name:'course3'},
    {id:4 , name:'course4'}
   
   ];  
  

//get
router.get('/',(req, res) =>{
    res.send('Hellow World')
 })   
 
 router.get('/data',(req, res) => {
    res.send(courses)
 })


 //post
 router.post('/',(req,res) =>{
    const course = {
    id: courses.length + 1,
    name: req.body.name
    };  
    
    courses.push(course);
    res.send(course);
 });


//put
router.put('/', (req,res) =>{
   
    let course =courses.find(c => c.id ===parseInt(req.params.id));
    if(!course) res.status(404).send('not found')

   const {error} = validateCourse(req.body);

 if(error){
    res.status(400).send(error.details[0].message);
    return;
 }  
  

 course.name =req.body.name;
res.send(course)
});


//Delete
router.delete('/:id', (req,res)=> {
    let course =courses.find(c => c.id ===parseInt(req.params.id));
    if(!course) res.status(404).send('not found')

//delete
   const index = courses.indexOf(course)
   courses.splice(index, 1);
   res.send(course);


})





function  validateCourse(course) {
    const schema ={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema );
}
/* 

function logger(req, res,next) {
    console.log('Log ')
    next()
}
 */

//Route Parameters
 router.get('/api/courses/:id', (req,res) =>{

    let course =courses.find(c => c.id ===parseInt(req.params.id));
    if(!course) res.status(404).send('not found')
    res.send(course)
   
 });

 module.exports = router;
