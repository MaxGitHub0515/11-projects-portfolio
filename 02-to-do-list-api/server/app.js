
const express = require('express');
const app = express();

// import routes
const tasksRouter = require('./routes/tasks');
// const authRouter = require('./routes/auth')


const startApp = require('./server');


const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



// middleware

app.use(notFound);
app.use(errorHandlerMiddleware);



app.use(express.static('../client/public'))
app.use(express.json());

// routes App
app.use('/', (req, res) => {
    res.send('<h1>To-do-list App</h1>');
    
})

app.use('/api/v1/tasks', tasksRouter);
// app.use('/api/v1/auth', authRouter);



startApp();




