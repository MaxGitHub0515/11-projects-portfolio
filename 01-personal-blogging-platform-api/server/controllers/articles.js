
const Article = require('../models/article')
const asyncWrapper = require('../middleware/async')
const { CustomAPIError } = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes');

const getAllArticles = async (req,res) => {
     const articles = await Article.find({});
     res.status(StatusCodes.OK).json({articles})
}

const createArticle = async (req, res) => {
    const article = await Article.create(req.body)
    res.status(StatusCodes.CREATED).json({ article })
}


const getArticle = async (req, res, next) => {
    const { id: articleID } = req.params;
    const article = await Article.findOne({_id: articleID})
    if(!article){
        return next(createCustomError(`No article with id : ${articleID}`, StatusCodes.NOT_FOUND));
    }
    res.status(StatusCodes.OK).json({article});
}


const deleteArticle = async (req, res, next) => {
    const { id: articleID } = req.params;
    const article = await Article.findOneAndDelete({_id: articleID})
    if(!article){
        return next(createCustomError(`No article with id : ${articleID}`), StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({article});

}


const updateArticle = async (req, res, next) => {
    const { id: articleID } = req.params
  
    const article = await Article.findOneAndUpdate({ _id: articleID }, req.body, {
      new: true,
      runValidators: true,
    });

    if(!article){
        return next(createCustomError(`No article with id : ${articleID}`), StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({article})
}


module.exports = {
    getAllArticles,
    createArticle,
    getArticle,
    deleteArticle,
    updateArticle
}