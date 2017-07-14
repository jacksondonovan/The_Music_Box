
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs',(table)=>{
    table.increments('id')
    table.string('song_title').notNullable()
    table.string('written_by').notNullable()
    table.string('by_name').references('username').inTable('users')
    table.string('written_for').notNullable()
    table.string('line_one').notNullable()
    table.string('line_two').notNullable()
    table.string('line_three').notNullable()
    table.string('line_four').notNullable()
    table.string('chorus_line_one').notNullable()
    table.string('chorus_line_two').notNullable()
    table.string('chorus_line_three').notNullable()
    table.string('chorus_line_four').notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('songs')
};
