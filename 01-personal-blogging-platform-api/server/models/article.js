
const { truncate } = require('fs/promises');
const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({

    imgUrl:{
        type: String,
        required: true
    },

    title:{
        type:String,
        required: [true, 'Please provide an article title'],
        minlength: 15,
        maxlength: 60
    
    },
    content:{
        type:String,
        required:[true, 'Please provide article content'],
        minlength:15,
        maxlength:100

    },
  
}, {timestamps: true})


module.exports = mongoose.model('Article', ArticleSchema)