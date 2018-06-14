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

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports = app;
