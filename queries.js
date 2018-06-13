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
  },
  createUser(user) {
    return knex('user')
      .insert(user)
      .returning('*')
      .then(record => record[0]);
  },
  createPet(pet) {
    return knex('pet')
      .insert(pet)
      .returning('*')
      .then(record => record[0]);
  }
  
};