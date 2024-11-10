

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors');
const asyncWrapper = require('./async');


const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError("Authentication invalid")
    }
    
    const token = asyncWrapper(async (req, res, next) => {
        authHeader.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_AUTH)
        req.user = {}
    })
   

    
}
