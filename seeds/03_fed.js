
module.exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('fed').del()
    .then(() => {
      // Inserts seed entries
      return knex('fed').insert([
        {
          id: 1,
          user_id: 1,
          pet_id: 1,
          fedOn: '2018-06-10T08:30:00-07:00'
        },
        {
          id: 2,
          user_id: 2,
          pet_id: 1,
          fedOn: '2018-06-10T17:30:00-07:00'
        },
        {
          id: 3,
          user_id: 1,
          pet_id: 1,
          fedOn: '2018-06-11T8:0:00-07:00'
        }
      ]);
    })
    .then(() => knex.raw('ALTER SEQUENCE fed_id_seq RESTART WITH 4;'));
};
