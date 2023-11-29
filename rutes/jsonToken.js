const express = require("express");
const tokenJ = express()
const secretKey = process.env.SECRETKEY
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');




  // Middleware para verificar el token JWT en rutas protegidas
  function verificarToken(req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ error: 'Token no proporcionado' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido' });
      }
  
      // Almacena la información del usuario en la solicitud para su uso posterior si es necesario
      req.user = decoded;
  
      next(); // Continúa con la siguiente capa de middleware o ruta
    });
  }


// Ruta para autenticar y obtener un token JWT
tokenJ.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Simula una autenticación exitosa
    if (username === 'usuario' && password === 'contraseña') {
      // Genera un token JWT
      const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  
      // Envia el token como respuesta
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  });



  // Ruta protegida que requiere un token JWT válido
  tokenJ.get('/protegido', verificarToken, (req, res) => {
    res.json({ mensaje: 'Esta ruta está protegida y solo es accesible con un token válido' });
  });

  module.exports = tokenJ;