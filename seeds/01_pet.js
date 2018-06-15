
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('pet').del()
    .then(() => {
      // Inserts seed entries
      return knex('pet').insert([
        { id: 1, petName: 'Snuggs' },
      ]);
    })
    .then(() => knex.raw('ALTER SEQUENCE pet_id_seq RESTART WITH 2;'));
};
