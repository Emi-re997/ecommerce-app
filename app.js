// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./rutes/index.js")

app.use(express.json());
app.use('/api', router); // Puedes ajustar la ruta base según tus necesidades

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en puerto:${PORT}`);
});