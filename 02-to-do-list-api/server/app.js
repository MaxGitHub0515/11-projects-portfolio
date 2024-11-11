
const express = require('express');
const app = express();

// database
const connectDB = require('./db/connect');

//configuring dotenv
require('dotenv').config();

// Packages: Security checks etc 
const cors = require('cors')



//  routers
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth')


// middleware imports
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');




//optional for npm 
require('colors');


// ---> 
/* Upcoming testing is scheduled to happen soon.
Last update - 11.11.2024
 */ 

app.use(cors())
app.use(express.static('../client/public'))
app.use(express.json());


  
// routes App

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tasks', tasksRouter);

  

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;


const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`.green)
      );
      await connectDB(process.env.MONGO_URI)
      if(connectDB ){
       console.log('Successfully Connected To The DB!'.green);

      }
    } catch (error) {
        if(error){
          console.log(error);
         console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red)
           
        }
     
    }
};


start()




