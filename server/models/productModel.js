const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: String,
  title: String,
  description: String,
  availableSizes: String,
  price: String,
  isFreeShipping: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
