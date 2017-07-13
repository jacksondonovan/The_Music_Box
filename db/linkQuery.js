const knex = require('./knex')

function specificUser(obj){
  return knex('users').where('username',obj)
}

function adduser(obj){
  return knex('users').insert(obj)
}

function addSong(obj){
  return knex('songs').insert(obj)
}

function showProf(obj){
  return knex('users').select().where('username',obj)
}

function updateUser(obj){
  return knex('users').select().where('username',obj.username).update({
    'username': obj.username,
    'first_name': obj.first_name,
    'last_name': obj.last_name,
    'bio': obj.bio,
    'fav_genre': obj.fav_genre,
    'influences': obj.influences,
    'team': obj.team
  })
}

function grabsongs(obj){
  return knex('songs').select().where('written_by',obj.written_by)
}

function deleteUser(objName){
  return knex('users').select().where('username',objName).del()
}

module.exports = {
  adduser,
  showProf,
  specificUser,
  updateUser,
  deleteUser,
  addSong,
  grabsongs
}
