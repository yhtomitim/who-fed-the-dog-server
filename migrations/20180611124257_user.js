
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary();
    table.text('username').notNullable().unique();
  });
};

module.exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('user');
};
