const knex = require('./knex')

function adduser(obj){
  return knex('users').insert(obj)
}

function showProf(){
  
}

module.exports = {
  adduser,
  showProf
}
