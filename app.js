// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const rutas = require('./rutes/index');

app.use(express.json());
app.use('/api', rutas); // Puedes ajustar la ruta base según tus necesidades

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});