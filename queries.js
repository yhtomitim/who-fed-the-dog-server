const knex = require('./connection');

module.exports = {
  listUsers() {
    return knex('user');
  },
  findUser(user) {
    return knex('user')
      .where('username', user.username)
      .then(foundUser => foundUser[0]);
  },
  updateUser(user, body) {
    return knex('user')
      .where('username', user.username)
      .update(body)
      .returning('*')
      .then(updatedRecord => updatedRecord[0])
  },
  listPets() {
    return knex('pet');
  },
  findPet(pet) {
    return knex('pet')
      .where('petName', pet.pet)
      .then(foundPet => foundPet[0]);
  },
  updatePet(pet, body) {
    return knex('pet')
      .where('petName', pet.pet)
      .update(body)
      .returning('*')
      .then(updatedRecord => updatedRecord[0])
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
  },
  deletePet(pet) {
    return knex('pet')
      .where('petName', pet.petName)
      .del();
  },
   deleteUser(user) {
     return knex('user')
       .where('username', user.username)
       .del();
   }
  
};