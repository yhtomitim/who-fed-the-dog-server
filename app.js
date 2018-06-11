require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./router/routes');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1/routes', routes);

module.exports = app;
