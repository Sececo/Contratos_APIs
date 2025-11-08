const projectsService = require('./projects.service');

let tasks = [];
let nextId = 1;

function getAll() {
  return tasks;
}

function getById(id) {
  return tasks.find(t => t.id === id);
}

function create({ title, description, projectId }) {
  const task = {
    id: nextId++,
    title: title || '',
    description: description || '',
    projectId: projectId != null ? Number(projectId) : null,
    status: 'todo'
  };
  tasks.push(task);
  return task;
}

function update(id, changes) {
  const t = getById(id);
  if (!t) return null;
  if (changes.title !== undefined) t.title = changes.title;
  if (changes.description !== undefined) t.description = changes.description;
  if (changes.projectId !== undefined) t.projectId = changes.projectId == null ? null : Number(changes.projectId);
  if (changes.status !== undefined) t.status = changes.status;
  return t;
}

function remove(id) {
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return false;
  tasks.splice(idx, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };