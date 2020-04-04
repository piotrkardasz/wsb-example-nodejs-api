const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');

const routes = require('./api/routes/products');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/products', routes);

module.exports = app;