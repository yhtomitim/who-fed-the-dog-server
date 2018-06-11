
module.exports.up = (knex, Promise) => {
  return knex.schema.createTable('fed', (table) => {
    table.foreign('id').references('user.user_id_in_user');
    table.foreign('id').references('pet.pet_id_in_pet');
    table.dateTime('fedOn');

  });
};

module.exports.down = (knex, Promise) => {
  return knex.scheme.dropTableIfExists('fed');
};
