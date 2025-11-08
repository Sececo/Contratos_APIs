const peopleService = require('../services/people.service');
const projectsService = require('../services/projects.service');

function getAll(req, res) {
  const items = peopleService.getAll().map(p => ({ status: 200, ...p }));
  res.json(items);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const item = peopleService.getById(id);
  if (!item) return res.status(404).json({ status: 404, message: 'Persona no encontrada' });
  res.json({ status: 200, ...item });
}

function create(req, res) {
  try {
    const { projectId } = req.body;
    if (projectId != null && !projectsService.getById(Number(projectId))) {
      return res.status(400).json({ status: 400, message: 'ProjectId no existe' });
    }
    const created = peopleService.create(req.body);
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
  const updated = peopleService.update(id, req.body);
  if (!updated) return res.status(404).json({ status: 404, message: 'Persona no encontrada' });
  res.json({ status: 200, message: 'Persona actualizada' });
}

function remove(req, res) {
  const id = Number(req.params.id);
  const deleted = peopleService.remove(id);
  if (!deleted) return res.status(404).json({ status: 404, message: 'Persona no encontrada' });
  res.json({ status: 200, message: 'Persona eliminada' });
}

module.exports = { getAll, getById, create, update, remove };