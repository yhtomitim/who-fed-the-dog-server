
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('fed', (table) => {
    // onDelete('cascade tells the db to delete this column in this table and the referenced table')
    table.increments('id').primary();
    table.integer('user_id').references('user.id').unsigned().onDelete('CASCADE');
    table.integer('pet_id').references('pet.id').unsigned().onDelete('CASCADE');
    table.timestamp('fedOn').defaultTo(knex.fn.now()).notNullable();

  });
};

module.exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('fed');
};
