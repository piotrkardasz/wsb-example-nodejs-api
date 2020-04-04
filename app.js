const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');

const routes = require('./api/routes/products');
// app.use((req, res, next) => {
//     res.status(200).json({
//         message : "It's Works fine!👍"
//     });
// })
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/products', routes);

module.exports = app;