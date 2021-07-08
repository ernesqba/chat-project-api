const TABLE_NAME = 'messages';

exports.up = (knex) => knex.schema.createTable(TABLE_NAME, (table) => {
  table.increments().primary();
  table.string('message').notNullable();
  table.timestamp('created_at').notNullable().defaultTo(knex.fn.now()).notNullable();
  table.timestamp('updated_at');
  table.integer('users message').notNullable();
  table.foreign('users message').references('id').inTable('users');
});

exports.down = (knex) => knex.schema.dropTable(TABLE_NAME);
