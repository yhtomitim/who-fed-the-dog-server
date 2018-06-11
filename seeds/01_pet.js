
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('pet').del()
    .then(() => {
      // Inserts seed entries
      return knex('pet').insert([
        {id: 1, petName: 'Snuggs'},
      ]);
    });
};
