const express = require('express');

const {PRODUCTS} = require('./mocks/products');

const app = express();

const port = 3001;

app.get('/products', (req, res) => {
  res.send(PRODUCTS);
});

app.post('/contact_request', (req, res) => {
  console.log('CONTACT REQUEST: \n', req.body);
  res.send({
    message: 'Request created successfully!'
  });
});

app.listen(port, () => {
  console.log(`API Server listening at http://localhost:${port}`);
});
