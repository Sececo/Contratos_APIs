const express = require('express');
const router = express.Router();
const controller = require('../controllers/projects.controller');

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Obtiene todos los proyectos registrados
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Lista de proyectos
 *         content:
 *           application/json:
 *             examples:
 *               ejemplo1:
 *                 summary: Proyectos de ejemplo
 *                 value:
 *                   - id: 1
 *                     name: "Sistema de riego"
 *                     description: "Instalación de sistema de riego automatizado"
 *                   - id: 2
 *                     name: "Red eléctrica rural"
 *                     description: "Extensión de red eléctrica en zona rural"
 */
router.get('/', controller.getAll);
/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Obtiene un proyecto por su ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del proyecto
 *     responses:
 *       200:
 *         description: Proyecto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *             examples:
 *               ejemplo1:
 *                 summary: Proyecto ejemplo
 *                 value:
 *                   id: 1
 *                   name: "Sistema de riego"
 *                   description: "Instalación de sistema de riego automatizado"
 */

router.get('/:id', controller.getById);
/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Crea un nuevo proyecto
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *           examples:
 *             ejemplo1:
 *               summary: Proyecto de ejemplo
 *               value:
 *                 name: "Red eléctrica rural"
 *                 description: "Extensión de red eléctrica en zona rural"
 *     responses:
 *       201:
 *         description: Proyecto creado
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Red eléctrica rural"
 *               description: "Extensión de red eléctrica en zona rural"
 */

router.post('/', controller.create);
/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Actualiza un proyecto por su ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del proyecto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           examples:
 *             ejemplo1:
 *               summary: Proyecto actualizado
 *               value:
 *                 name: "Sistema de riego inteligente"
 *                 description: "Actualización con sensores de humedad"
 *     responses:
 *       200:
 *         description: Proyecto actualizado
 */

router.put('/:id', controller.update);
/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Elimina un proyecto por su ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *         description: ID del proyecto a eliminar
 *     responses:
 *       204:
 *         description: Proyecto eliminado correctamente
 */

router.delete('/:id', controller.remove);

module.exports = router;