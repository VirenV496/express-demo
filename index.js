 
const helmet = require("helmet"); //third party middlewares
const morgan = require('morgan') //third party middlewares
var colors = require('colors');
 const Joi =require('joi') //validation
 const express = require('express'); //This returns a function express
 
 const courses =require ('./routes/courses')


 const app = express();
 app.use(express.json());

  const logger = require('./logger')
  app.use(logger)  //custome middleware

  app.use(express.urlencoded({extended: true}));//Builtin middleware 
  app.use(express.static('public')); //static builtin middleware 
  app.use(helmet());
  app.use(morgan('tiny'));

  app.use('/api/courses', courses)

   if(app.get ('env') === 'developement'){

      app.use(morgan('tiny')) 
      console.log('morgan enabled...')
   }


     

 app.listen(5000, () =>{
    console.log('Listenning on port 5000...'.rainbow)
})






//  Envirnoment Variables 
// Assigning a port 
/* const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listenning on port  ${port}....`.rainbow)
}) */

//default
