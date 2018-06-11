
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('fed').del()
    .then(() => {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, fedOn: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
