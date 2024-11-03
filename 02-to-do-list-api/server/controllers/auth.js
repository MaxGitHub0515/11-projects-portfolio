
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const  {BadRequestError, UnauthenticatedError}  = require('../errors');


const register = async (req,res) => {
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(StatusCodes.CREATED)
    .json({
        user: {
            email: user.email,
            username: user.username,
            token,
        }
    })
}
const login = async (req,res) => {
   const {email, password} = req.body;
   if(!email || !password){
    throw new BadRequestError('Please provide email and password ')
   }
   const user = await user.findOne({email});
   if(!user){
    throw new UnauthenticatedError('Invalid Credentials');
}
const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials');
        
     }

     const token = user.createJWT();
     res.status(StatusCodes.OK.json({
        user: {
            email: user.email,
            username: user.username,
            token,
        }
     }))


}


module.exports = {
    register,
    login
}