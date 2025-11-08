const tasksService = require('../services/tasks.service');
const projectsService = require('../services/projects.service');

function getAll(req, res) {
  const items = tasksService.getAll().map(t => ({ status: 200, ...t }));
  res.json(items);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const item = tasksService.getById(id);
  if (!item) return res.status(404).json({ status: 404, message: 'Tarea no encontrada' });
  res.json({ status: 200, ...item });
}

function create(req, res) {
  try {
    const { projectId } = req.body;
    if (projectId == null || !projectsService.getById(Number(projectId))) {
      return res.status(400).json({ status: 400, message: 'ProjectId no existe' });
    }
    const created = tasksService.create(req.body);
    res.status(201).json({ status: 201, ...created });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}

function update(req, res) {
  const id = Number(req.params.id);
  const { projectId } = req.body;
  if (projectId !== undefined && projectId != null && !projectsService.getById(Number(projectId))) {
    return res.status(400).json({ status: 400, message: 'ProjectId no existe' });
  }
  const updated = tasksService.update(id, req.body);
  if (!updated) return res.status(404).json({ status: 404, message: 'Tarea no encontrada' });
  res.json({ status: 200, message: 'Tarea actualizada' });
}

function remove(req, res) {
  const id = Number(req.params.id);
  const deleted = tasksService.remove(id);
  if (!deleted) return res.status(404).json({ status: 404, message: 'Tarea no encontrada' });
  res.json({ status: 200, message: 'Tarea eliminada' });
}

module.exports = { getAll, getById, create, update, remove };