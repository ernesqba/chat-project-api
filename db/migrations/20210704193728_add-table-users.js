const TABLE_NAME = 'users';

exports.up = (knex) => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments().primary();
  table.string('username').unique().notNullable();
  table.string('name').notNullable();
  table.string('lastname').notNullable();
  table.timestamp('created_at').notNullable().defaultTo(knex.fn.now()).notNullable();
  table.timestamp('updated_at');
});

exports.down = (knex) => knex.schema.dropTable(TABLE_NAME);
