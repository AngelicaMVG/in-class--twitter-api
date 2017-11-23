
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('profile', table => {
      table
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('user');

      return table;
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('profile', table => {
      table.dropForeign('userId');
      table.dropColumn('userId');

      return table;
    });
};
