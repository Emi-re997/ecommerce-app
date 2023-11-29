// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const tokenJ = require("./rutes/jsonToken.js")
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const router = require("./rutes/index.js")

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

app.use(express.json());

app.use('/api', router); // Puedes ajustar la ruta base según tus necesidades

app.use("/secure", tokenJ)


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en puerto:${PORT}`);
});