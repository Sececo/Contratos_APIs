const dotenv = require('dotenv');

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'mydatabase',
    },
    // Otras configuraciones pueden ser añadidas aquí
};

module.exports = config;