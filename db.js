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

// Sincronizar la base de datos
async function syncDatabase() {
    try {
      // Sincroniza el modelo con la base de datos
      await sequelize.sync({ alter: true });
      console.log('Base de datos sincronizada correctamente.');
    } catch (error) {
      console.error('Error al sincronizar la base de datos:', error.message);
      throw error;
    }
  }
  
  // Ejecutar la sincronización y conexión al iniciar la aplicación
  async function initializeDatabase() {
    await testDatabaseConnection();
    await syncDatabase();
  }
  
  initializeDatabase();

module.exports = sequelize;
