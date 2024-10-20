
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
} )

UserSchema.methods.com







module.exports = mongoose.model('User', UserSchema );