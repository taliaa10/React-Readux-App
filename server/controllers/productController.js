const Product = require('../models/productModel');

exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    console.log(product);

    res.status(200).json({
      status: 'success',
      data: product
    });
  } catch (error) {
    console.log(error);
  }
};
