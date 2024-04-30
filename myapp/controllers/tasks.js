const tasksModel = require('../models/tasks');

exports.createTask = (req, res) => {
    tasksModel.createTask(req.body, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.json({ id: result.id });
    });
};

exports.getTaskById = (req, res) => {
    tasksModel.getTaskById(req.params.id, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.json(result);
    });
};

exports.updateTaskById = (req, res) => {
    tasksModel.updateTaskById(req.params.id, req.body, err => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.json({ message: 'Task updated successfully' });
    });
};

exports.deleteTaskById = (req, res) => {
    tasksModel.deleteTaskById(req.params.id, err => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        return res.json({ message: 'Task deleted successfully' });
    });
};

module.exports = exports;