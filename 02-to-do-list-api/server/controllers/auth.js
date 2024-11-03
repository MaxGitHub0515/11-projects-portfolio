
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const  {BadRequestError, UnauthenticatedError}  = require('../errors');


const register = asyncWrapper(async (req,res) => {
    res.send('register user');
    
})
const login = asyncWrapper(async (req,res) => {
    res.send('login user');

})


module.exports = {
    register,
    login
}