const peopleService = require('./people.service');

let projects = [];
let nextId = 1;

function getAll() {
  return projects;
}

function getById(id) {
  return projects.find(p => p.id === id);
}

function create({ name, description }) {
  const project = {
    id: nextId++,
    name: name || '',
    description: description || ''
  };
  projects.push(project);
  return project;
}

function update(id, changes) {
  const p = getById(id);
  if (!p) return null;
  if (changes.name !== undefined) p.name = changes.name;
  if (changes.description !== undefined) p.description = changes.description;
  return p;
}

function remove(id) {
  const idx = projects.findIndex(p => p.id === id);
  if (idx === -1) return false;
  projects.splice(idx, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };