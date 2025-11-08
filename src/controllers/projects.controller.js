const projectsService = require('../services/projects.service');
const peopleService = require('../services/people.service');

function getAll(req, res) {
  const items = projectsService.getAll().map(p => ({ status: 200, ...p }));
  res.json(items);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const item = projectsService.getById(id);
  if (!item) return res.status(404).json({ status: 404, message: 'Proyecto no encontrado' });
  res.json({ status: 200, ...item });
}

function create(req, res) {
  try {
    const created = projectsService.create(req.body);
    res.status(201).json({ status: 201, ...created });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
}

function update(req, res) {
  const id = Number(req.params.id);
  const updated = projectsService.update(id, req.body);
  if (!updated) return res.status(404).json({ status: 404, message: 'Proyecto no encontrado' });
  res.json({ status: 200, message: 'Proyecto actualizado' });
}

function remove(req, res) {
  const id = Number(req.params.id);
  const deleted = projectsService.remove(id);
  if (!deleted) return res.status(404).json({ status: 404, message: 'Proyecto no encontrado' });
  res.json({ status: 200, message: 'Proyecto eliminado' });
}

module.exports = { getAll, getById, create, update, remove };