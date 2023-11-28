// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: true, // Cambiar a false en producción para evitar la salida de consultas SQL en la consola
});

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
}

testDatabaseConnection();

module.exports = sequelize;
