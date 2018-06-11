
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('fed', (table) => {
    // onDelete('cascade tells the db to delete this column in this table and the referenced table')
    table.foreign('user_id').references('user.id').onDelete('CASCADE');
    table.foreign('pet_id').references('pet.id');
    table.timestamp('fedOn').defaultTo(knex.fn.now());

  });
};

module.exports.down = (knex, Promise) => {
  return knex.scheme.dropTableIfExists('fed');
};
