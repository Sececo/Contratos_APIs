const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasks.controller');

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtiene todas las tareas registradas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         content:
 *           application/json:
 *             examples:
 *               ejemplo1:
 *                 summary: Tareas de ejemplo
 *                 value:
 *                   - id: 1
 *                     title: "Revisión técnica"
 *                     description: "Verificar especificaciones del sistema"
 *                     projectId: 1
 *                     status: "todo"
 *                   - id: 2
 *                     title: "Instalación de sensores"
 *                     description: "Colocar sensores en puntos críticos"
 *                     projectId: 1
 *                     status: "todo"
 */
router.get('/', controller.getAll);
/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Obtiene una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 projectId:
 *                   type: integer
 *                 status:
 *                   type: string
 *             examples:
 *               ejemplo1:
 *                 summary: Tarea ejemplo
 *                 value:
 *                   id: 1
 *                   title: "Revisión técnica"
 *                   description: "Verificar especificaciones del sistema"
 *                   projectId: 1
 *                   status: "todo"
 */

router.get('/:id', controller.getById);
/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crea una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               projectId:
 *                 type: integer
 *           examples:
 *             ejemplo1:
 *               summary: Tarea de ejemplo
 *               value:
 *                 title: "Instalación de sensores"
 *                 description: "Colocar sensores en puntos críticos"
 *                 projectId: 1
 *     responses:
 *       201:
 *         description: Tarea creada
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               title: "Instalación de sensores"
 *               description: "Colocar sensores en puntos críticos"
 *               projectId: 1
 *               status: "todo"
 */

router.post('/', controller.create);
/**
 * @swagger
 * /tasks:
 *   put:
 *     summary: Actualiza una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la tarea a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           examples:
 *             ejemplo1:
 *               summary: Tarea actualizada
 *               value:
 *                 title: "Revisión técnica avanzada"
 *                 description: "Validar compatibilidad con sensores"
 *                 projectId: 1
 *                 status: "in-progress"
 *     responses:
 *       200:
 *         description: Tarea actualizada
 */

router.put('/:id', controller.update);
/**
 * @swagger
 * /tasks:
 *   delete:
 *     summary: Elimina una tarea por su ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *         description: ID de la tarea a eliminar
 *     responses:
 *       204:
 *         description: Tarea eliminada correctamente
 */

router.delete('/:id', controller.remove);

module.exports = router;