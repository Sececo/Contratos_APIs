const express = require('express');
const { setRoutes } = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

// Opciones de configuración para swagger-jsdoc
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contratos API',
      version: '1.0.0',
      description: 'Documentación de la API de Contratos',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api/v1`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

// Ruta para la documentación
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use(express.json());

setRoutes(app);

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}/v1`);
  console.log(`Documentación disponible en http://localhost:${PORT}/v1/api-docs`);
});