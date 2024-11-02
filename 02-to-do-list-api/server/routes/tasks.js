
const express = require('express');

const router = express.Router();

const {
    getSingleTask,
    getAllTasks,
    updateTask,
    createTask,
    deleteTask

   
} = require('../controllers/tasks');

router.route('/tasks').get(getAllTasks).post(createTask);
router.route('/tasks:id').get(getSingleTask).patch(updateTask).delete(deleteTask);


module.exports = router;

