const express = require('express');
const router = express.Router();
const controller = require('../controllers/people.controller');

/**
 * @swagger
 * /people:
 *   get:
 *     summary: Obtiene todas las personas registradas
 *     tags: [People]
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             examples:
 *               ejemplo1:
 *                 summary: Personas de ejemplo
 *                 value:
 *                   - id: 1
 *                     name: "Laura Martínez"
 *                     email: "laura@example.com"
 *                     role: "Diseñadora"
 *                     projectId: 1
 *                   - id: 2
 *                     name: "Carlos Ruiz"
 *                     email: "carlos@example.com"
 *                     role: "Ingeniero"
 *                     projectId: 1
 */
router.get('/', controller.getAll);
/**
 * @swagger
 * /people/{id}:
 *   get:
 *     summary: Obtiene una persona por su ID
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la persona
 *     responses:
 *       200:
 *         description: Persona encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *                 projectId:
 *                   type: integer
 *             examples:
 *               ejemplo1:
 *                 summary: Persona ejemplo
 *                 value:
 *                   id: 1
 *                   name: "Laura Martínez"
 *                   email: "laura@example.com"
 *                   role: "Diseñadora"
 *                   projectId: 1
 */

router.get('/:id', controller.getById);
/**
 * @swagger
 * /people:
 *   post:
 *     summary: Crea una nueva persona
 *     tags: [People]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               role:
 *                 type: string
 *               projectId:
 *                 type: integer
 *           examples:
 *             ejemplo1:
 *               summary: Persona de ejemplo
 *               value:
 *                 name: "Carlos Ruiz"
 *                 email: "carlos@example.com"
 *                 role: "Ingeniero"
 *                 projectId: 1
 *     responses:
 *       201:
 *         description: Persona creada
 *         content:
 *           application/json:
 *             example:
 *               id: 2
 *               name: "Carlos Ruiz"
 *               email: "carlos@example.com"
 *               role: "Ingeniero"
 *               projectId: 1
 */

router.post('/', controller.create);
/**
 * @swagger
 * /people/{id}:
 *   put:
 *     summary: Actualiza una persona por su ID
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *         description: ID de la persona a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           examples:
 *             ejemplo1:
 *               summary: Datos actualizados
 *               value:
 *                 name: "Carlos Ramirez"
 *                 email: "carlos.ruiz@example.com"
 *                 role: "Gerente de proyecto"
 *                 projectId: 1
 *     responses:
 *       200:
 *         description: Persona actualizada
 */

router.put('/:id', controller.update);
/**
 * @swagger
 * /people/{id}:
 *   delete:
 *     summary: Elimina una persona por su ID
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *         description: ID de la persona a eliminar
 *     responses:
 *       204:
 *         description: Persona eliminada correctamente
 */

router.delete('/:id', controller.remove);

module.exports = router;