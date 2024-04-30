const express = require('express');

const tasksRoutes = require('./routes/tasks');

const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use('/tasks', tasksRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;