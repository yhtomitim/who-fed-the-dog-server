
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('pet', (table) => {
    table.increments('id').primary;
    table.text('petName');
  });
};

module.exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('pet');
};
