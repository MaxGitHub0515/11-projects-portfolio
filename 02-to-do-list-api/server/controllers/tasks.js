
// TASK
/* You’ll also have to be able to update tasks (their status) and even delete them. */
const express = require('express')
const { StatusCodes } = require('http-status-codes')
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');


const createTask = asyncWrapper(async (req,res) => {
    const task = await Task.create(req.body);
    res.status(StatusCodes.CREATED)
})

const deleteTask = asyncWrapper( async (req, res) =>{
    const task = await Task.findOneAndDelete()
})

const updateTask = asyncWrapper(async (req,res) => {
    const task = await Task.findOneAndUpdate()
})


const getAllTasks = asyncWrapper(async (req,res) => {
    const task = await Task.find()
})

const filterByStatus = asyncWrapper(async(req,res) => {
    const {status} = req.query;
    let filter = {};
    const task = await Task.find(filter).select


})

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getAllTasks
}