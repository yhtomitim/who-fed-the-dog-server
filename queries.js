const knex = require('./connection');

module.exports = {
  listUsers() {
    return knex('user');
  },
  listPets() {
    return knex('pet');
  },
  listFedOn() {
    return knex('fedOn');
  }
};