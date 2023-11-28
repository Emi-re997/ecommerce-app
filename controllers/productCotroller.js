// controllers/productController.js
const Product = require('../models/Product');

// Obtener todos los productos
async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Obtener un producto por ID
async function getProductById(req, res) {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Crear un nuevo producto
async function createProduct(req, res) {
  const { name, price, description } = req.body;
  try {
    const newProduct = await Product.create({ name, price, description });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Actualizar un producto por ID
async function updateProductById(req, res) {
  const productId = req.params.id;
  const { name, price, description } = req.body;
  try {
    const product = await Product.findByPk(productId);
    if (product) {
      product.name = name;
      product.price = price;
      product.description = description;
      await product.save();
      res.json(product);
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Eliminar un producto por ID
async function deleteProductById(req, res) {
  const productId = req.params.id;
  try {
    const product = await Product.findByPk(productId);
    if (product) {
      await product.destroy();
      res.json({ message: 'Producto eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
