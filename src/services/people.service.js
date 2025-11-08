let people = [];
let nextId = 1;

function getAll() {
  return people;
}

function getById(id) {
  return people.find(p => p.id === id);
}

function create({ name, email, role, projectId }) {
  const person = {
    id: nextId++,
    name: name || '',
    email: email || '',
    role: role || '',
    projectId: projectId != null ? Number(projectId) : null
  };
  people.push(person);
  return person;
}

function update(id, changes) {
  const p = getById(id);
  if (!p) return null;
  if (changes.name !== undefined) p.name = changes.name;
  if (changes.email !== undefined) p.email = changes.email;
  if (changes.role !== undefined) p.role = changes.role;
  if (changes.projectId !== undefined) p.projectId = changes.projectId == null ? null : Number(changes.projectId);
  return p;
}

function remove(id) {
  const idx = people.findIndex(p => p.id === id);
  if (idx === -1) return false;
  people.splice(idx, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };