
const express = require('express');

const router = express.Router();

const {
    getTask,
    getAllTasks,
    updateTask,
    createTask,
    deleteTask

   
} = require('../controllers/tasks');


router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;

