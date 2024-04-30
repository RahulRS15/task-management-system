const db = require('../db');

exports.createTask = (task, callback) => {
    const { title, description, status, assignee_id } = task;
    const created_at = new Date().toISOString();
    const updated_at = created_at;

    const sql = `INSERT INTO Tasks (title, description, status, assignee_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(sql, [title, description, status, assignee_id, created_at, updated_at], function(err) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, { id: this.lastID });
        }
    });
};
exports.getTaskById = (id, callback) => {
    const sql = `SELECT * FROM Tasks WHERE id = ?`;
    db.get(sql, [id], function(err, row) {
        callback(err, row);
    });
};

exports.updateTaskById = (id, task, callback) => {
    const { title, description, status, assignee_id } = task;
    const updated_at = new Date().toISOString();

    const sql = `UPDATE Tasks SET title = ?, description = ?, status = ?, assignee_id = ?, updated_at = ? WHERE id = ?`;
    db.run(sql, [title, description, status, assignee_id, updated_at, id], function(err) {
        callback(err);
    });
};

exports.deleteTaskById = (id, callback) => {
    const sql = `DELETE FROM Tasks WHERE id = ?`;
    db.run(sql, [id], function(err) {
        callback(err);
    });
};