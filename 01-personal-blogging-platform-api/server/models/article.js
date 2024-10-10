
const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({

    imgUrl:{
        type: String,
        required: true
    },
    createdAt:{
        type: Data,
        default: Date.now()
    },
    title:{
        type:String,
        required: [true, 'Please provide an article title']
        minlength: 15,
        maxlength: 60
    
    },
    content:{
        type:String,
        required:[true, 'Please provide article content']
        minlength:15,
        maxlength:100

    }
})