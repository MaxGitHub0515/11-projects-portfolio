
const express = require('express');

const router = express.Router();

const {
    getAllTasks,
    updateTask,
    createTask,
    deleteTask

   
} = require('../controllers/tasks');

router.route('/tasks').get(getAllTasks).post(createTask);
router.route()



module.exports = router;