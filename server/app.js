const express = require('express');
const app = express();
const cors = require('cors');
const Product = require('./models/productModel');
const productRouter = require('./routes/productRoute');

app.use(cors());

app.use(express.json());

// app.use('/', (req, res) => {
//   res.send('ok');
// });

app.get('/', async (req, res) => {
  const products = await Product.find();
  console.log(products);

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products
    }
  });
});

app.use('/products', productRouter);

// app.post('/', async (req, res) => {

// });

module.exports = app;
