import mongoose from "mongoose";
import messages from "../config/msg.js";
import jwt from "jsonwebtoken";
import bcryptJS from "bcryptjs"

const UserSchema =  new mongoose.Schema({
    username:{
        type:String,
        required:[true, messages.required ],
        minlength:[ messages.User.uname.minLength],
        maxlength:[30, messages.User.uname.maxLength],
        unique: [true, messages.User.uname.unique],
    },
    email:{
        type:String,
        required:[true, "This field is required"],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            messages.User.email.invalid
        ],
        unique:[true, messages.User.email.unique]
    
    },
    password:{
        type:String,
        required:[true, messages.required],
        maxlength:[64,messages.User.pwd.maxLength],
        minlength:[8, messages.User.pwd.minLength]
    }
})

UserSchema.pre('save',  async () => {
    const salt = await bcryptJS.genSalt(10);
    this.password = await bcryptJS.hash(this.password, salt);
})

UserSchema.methods.createJWT = function() {
    return jwt.sign(
        //
    )
}

UserSchema.methods.comparePassword = async (candidatePwd) => {
    const isMatch = await bcryptJS.compare(candidatePwd, this.password);
    return isMatch;
}
export default mongoose.model('User', UserSchema, "user")