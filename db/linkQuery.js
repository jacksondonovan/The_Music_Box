const knex = require('./knex')

function specificuser(obj){
  return knex('users').where('username',obj)
}

function adduser(obj){
  return knex('users').insert(obj)
}

function showProf(obj){
  return knex('users').select().where('username',obj)
}

module.exports = {
  adduser,
  showProf,
  specificuser
}
