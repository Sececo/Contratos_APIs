const express = require('express');
const { setRoutes } = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

setRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});