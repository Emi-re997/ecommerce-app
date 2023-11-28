// routes/index.js
const express = require('express');
const app = express.Router();
const productController = require('../controllers/productController');



// Obtener todos los productos
app.get('/', productController.getAllProducts);

// Obtener un producto por ID
app.get('/:id', productController.getProductById);

// Crear un nuevo producto
app.post('/', productController.createProduct);

// Actualizar un producto por ID
app.put('/:id', productController.updateProductById);

// Eliminar un producto por ID
app.delete('/:id', productController.deleteProductById);



module.exports = router;
