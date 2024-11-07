
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const cors = require('cors')
const {createCustomError} = require('./errors')


// import routes
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth')



const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const { prototype } = require('stream');
const { StatusCodes } = require('http-status-codes');



//optional
require('colors');



app.use(cors())
app.use(express.static('../client/public'))
app.use(express.json());


  
// routes App

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/auth', (req,res) => {
  const msg = "Loaded Successfully Auth Page";
  res.json({msg})
})
  

app.use('/api/v1/tasks', tasksRouter);
app.use('/api/v1/tasks', (req,res) => {
  const msg = "Loaded Successfully Tasks Page";
  res.json({msg})
})
  

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




