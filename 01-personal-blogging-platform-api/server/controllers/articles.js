
const Article = require('../models/article')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes');

const getAllArticles = asyncWrapper(async (req,res) => {
    const articles = await Article.find({});
    res.status(StatusCodes.OK).json({articles})
})

const createArticle = asyncWrapper(async (req, res) => {
    const article = await Article.create(req.body)
    res.status(StatusCodes.CREATED).json({ article })
})


const getArticle = asyncWrapper(async (req, res, next) => {
    const { id: articleID } = req.params;
    const article = await Article.findOne({_id: articleID})
    if(!article){
        return next(createCustomError(`No article with id : ${articleID}`, StatusCodes.NOT_FOUND));
    }
    res.status(StatusCodes.OK).json({article});
}) 


const deleteArticle = asyncWrapper(async (req, res, next) => {
    const { id: articleID } = req.params;
    const article = await Article.findOneAndDelete({_id: articleID})
    if(!article){
        return next(createCustomError(`No article with id : ${articleID}`), StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({article});

}) 


const updateArticle = asyncWrapper(async (req, res, next) => {
    const { id: articleID } = req.params
  
    const article = await Article.findOneAndUpdate({ _id: articleID }, req.body, {
      new: true,
      runValidators: true,
    });

    if(!article){
        return next(createCustomError(`No article with id : ${articleID}`), StatusCodes.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json({article})
})


module.exports = {
    getAllArticles,
    createArticle,
    getArticle,
    deleteArticle,
    updateArticle
}