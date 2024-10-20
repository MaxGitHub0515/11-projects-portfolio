
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const  {BadRequestError, UnauthenticatedError}  = require('../errors');


const signUp = async(req,res) =>{
    const user = await User.create({...req.body})
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}



