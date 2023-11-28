// routes/index.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Obtener todos los productos
router.get('/', productController.getAllProducts);

// Obtener un producto por ID
router.get('/:id', productController.getProductById);

// Crear un nuevo producto
router.post('/', productController.createProduct);

// Actualizar un producto por ID
router.put('/:id', productController.updateProductById);

// Eliminar un producto por ID
router.delete('/:id', productController.deleteProductById);

module.exports = router;
