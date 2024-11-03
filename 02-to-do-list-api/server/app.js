
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const cors = require('cors')


// import routes
const tasksRouter = require('./routes/tasks');
const authRouter = require('./routes/auth')



const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


//optional
require('colors');



app.use(cors())
app.use(express.static('../client/public'))
app.use(express.json());


  
// routes App

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tasks', tasksRouter);

app.use('/api/v1/tasks', (req,res) => {
    res.send(`
    <h1>Up and running</h1>
    <h3>Getting all tasks</h3>
`)

})

// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || 8000;

const start = async () => {
    try {
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`.green)
      );
      await connectDB(process.env.MONGO_URI);
      if(connectDB ){
       console.log('Successfully Connected To The DB!'.green);

      }
    } catch (error) {
        if(error){
            console.log(error); console.log("|||--CAUGHT A CONNECT_DB ERROR OR A SERVER ERROR--|||".red)
        }
     
    }
};

start()




