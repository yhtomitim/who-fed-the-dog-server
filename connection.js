const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile');
const configEnv = knexConfig[environment];
const knex = require('knex');
const connection = knex(configEnv);

module.exports = connection;