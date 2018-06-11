require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser());
app.use(cors());
app.use(morgan('dev'));


app.listen(port, () => console.log(`listening on ${port}`)
);
