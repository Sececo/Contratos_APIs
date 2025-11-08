const express = require('express');
const projectsRouter = require('./projects.routes');
const tasksRouter = require('./tasks.routes');
const peopleRouter = require('./people.routes');
const healthController = require('../controllers/healthController');

function setRoutes(app) {
  app.use('/api/v1/projects', projectsRouter);
  app.use('/api/v1/tasks', tasksRouter);
  app.use('/api/v1/people', peopleRouter);

  app.get('/health', healthController.health);
}

module.exports = { setRoutes };