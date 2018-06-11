
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('fed', (table) => {
    // onDelete('cascade tells the db to delete this column in this table and the referenced table')
    table.increments('id').primary();
    table.integer('user_id').references('user.id').unsigned().onDelete('CASCADE');
    table.integer('pet_id').references('pet.id').unsigned().onDelete('CASCADE');
    table.timestamp('fedOn').defaultTo(knex.fn.now());

  });
};

module.exports.down = (knex, Promise) => {
  return knex.scheme.dropTableIfExists('fed');
};

// Knex: warning - migration file "20180611134925_fed_log.js"
// failed
// Knex: warning - migration failed with error: alter table "fed"
// add constraint "fed_user_id_foreign"
// foreign key("user_id") references "user" ("id") on delete CASCADE - column "user_id"
// referenced in foreign key constraint does not exist
