const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.post('/', tasksController.createTask);
router.get('/', tasksController.getAllTasks);
router.get('/:id', tasksController.getTaskById);
router.put('/:id', tasksController.updateTaskById);
router.delete('/:id', tasksController.deleteTaskById);

module.exports = router;