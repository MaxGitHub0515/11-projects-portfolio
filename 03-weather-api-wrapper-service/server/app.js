const express = require('express');
const app = express();
require('dotenv').config()
const { rateLimit } = require('express-rate-limit');
const { Redis } = require('ioredis');
// Routes
const weatherRouter = require('./routes/weather.js')


const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// dependencies 
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
});

const client = new Redis(process.env.REDIS_URL, {
    tls: {
        rejectUnauthorized: false // Disable certificate validation
    }
});


// middleware
app.use(notFound);
app.use(errorHandlerMiddleware);
// depend middleware
app.use(limiter)

// built-in middleware
app.use(express.static('../client/public'));
app.use(express.json());


const startApp = require('./server');

startApp();

module.exports = {
    client
}