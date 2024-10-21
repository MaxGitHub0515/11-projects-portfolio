


const mongoose =  require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "This field is required "],
        trim:true,
        minlength:[5, 'Title can not be less then 5 characters'],
        maxlength: [100, "Title can not be more then 100 characters"],
        default: "No title provided"
    },
    description:{
        type:String,
        trim:true,
        minlength: [10, "Description must be at least 10 characters long"],
        maxlength: [500, "Description cannot be more than 500 characters"], 
        default: "No description provided"
    },

    status:{
        type:String,
        enum: ['pending', 'in progress', 'completed'],
        default:'pending',
    },
     createdAt:{
        type:Date,
        default: Date.now,

     },

     updatedAt:{
        type:Date,
        default:Date.now
     }

})


module.exports = mongoose.model('Task', TaskSchema)