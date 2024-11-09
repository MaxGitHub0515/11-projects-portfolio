
//import built-in express
const express = require('express');
const app = express();

//imported routes
const articles = require('./routes/articles');

//configuring dotenv
require('dotenv').config()

//connect DB
const connectDB = require('./db/connect');


// built-in middleware
//  app.use(express.static('../client/public'))
 app.use(express.json());


// App middleware imports
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



// App routes

app.get("/hello", (req, res) => {
    res.send('Personal Blogging App')
})


 app.use("/api/v1/articles", articles)



//optional
require('colors');


// App Middleware
// app.use(notFound);
// app.use(errorHandlerMiddleware);

const PORT = process.env.PORT;


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









