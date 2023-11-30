// routes/index.js
const express = require('express');
const router = express.Router();
const productController = require("../controllers/productCotroller.js");
const categoryController = require("../controllers/categoryController.js")

// Obtener todos los productos
router.get('/products', productController.getAllProducts);

// Obtener un producto por ID
router.get('/products/:id', productController.getProductById);

// Crear un nuevo producto
router.post('/products', productController.createProduct);

// Actualizar un producto por ID
router.put('/products/:id', productController.updateProductById);

// Eliminar un producto por ID
router.delete('/products/:id', productController.deleteProductById);

//------------------------------------------------------------------------

// Obtener todas las categorías
router.get('/categories', categoryController.getAllCategories);

// Crear una nueva categoría
router.post('/categories', categoryController.createCategory);

module.exports = router;
