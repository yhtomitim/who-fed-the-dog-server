const knex = require('./connection');

module.exports = {
  listUsers() {
    return knex('user');
  },
  listPets() {
    return knex('pet');
  },
  listFedOn() {
    return knex('fed');
  },
  createFeed(feed) {
    return knex('fed')
      .insert(feed)
      .returning('*')
      .then(record => record[0])
  }
  
};