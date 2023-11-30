// controllers/productController.js
const Product = require('../models/Product');

// Obtener todos los productos
async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
    res.status(500).json({ error: 'Error al obtener productos' });
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
    console.error('Error al obtener un producto por ID:', error.message);
    res.status(500).json({ error: 'Error al obtener un producto por ID' });
  }
}

// Crear un nuevo producto
async function createProduct(req, res) {
  const { name, price, description, imageUrl, stockQuantity, isFeatured, isActive, categoryId } = req.body;
  try {
    if (!name || !price) {
      throw new Error('El nombre y el precio son campos obligatorios');
    }

    // Crea un nuevo producto
    const newProduct = await Product.create({ name, price, description, imageUrl, stockQuantity, isFeatured, isActive });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al crear un nuevo producto:', error.message);
    console.log(Product.categoryId)
    res.status(400).json({ error: error.message });
  }
}

// Actualizar un producto por ID
async function updateProductById(req, res) {
  const productId = req.params.id;
  const { name, price, description, imageUrl, stockQuantity, isFeatured, isActive } = req.body;
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
    console.error('Error al actualizar un producto por ID:', error.message);
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
    console.error('Error al eliminar un producto por ID:', error.message);
    res.status(500).json({ error: 'Error al eliminar un producto por ID' });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
