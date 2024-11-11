
const mongoose = require('mongoose')
const bcryptJS = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const UserSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:[true, "This field is required"],
        minlength:6,
        maxlength:30,
        unique: true,
    },
    email:{
        type:String,
        required:[true, "This field is required"],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ],
        unique:true
    
    },
    password:{
        type:String,
        required:[true, "This field is required"],
        maxlength:128,
        minlength:8
    }
})


UserSchema.pre('save', async () => {
    const salt = await bcryptJS.genSalt(10)
    this.password = await bcryptJS.hash(this.password, salt)
} )

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        {userID: this.id, name: this.name}, process.env.JWT_AUTH, {expiresIn: process.env.JWT_LIFETIME});
    
}
UserSchema.methods.comparePassword = async function (candidatePassword){
    const isMatch = await bcryptJS.compare(candidatePassword, this.password);
    return isMatch
}



module.exports = mongoose.model('User', UserSchema, "user" );