const knex = require('./knex')

function specificUser(obj){
  return knex('users').where('username',obj)
}

function adduser(obj){
  return knex('users').insert(obj)
}

function addSong(obj){
  // obj.by_name = obj.written_by
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

function showSongs(obj){
  return knex('songs').select().where('written_by_id',obj.id)
}

function writtenForMe(obj){
  return knex('songs').select().where('written_for',obj.username)
}

function deleteSong(objName){
  return knex('songs').select().where('written_by',objName).del()
}

function deleteUser(objName){
  return knex('users').select().where('username',objName).del()
}

function specificSong(obj){
  return knex('songs').select().where('song_title',obj)
}

module.exports = {
  adduser,
  showProf,
  specificUser,
  updateUser,
  deleteUser,
  deleteSong,
  addSong,
  writtenForMe,
  showSongs,
  specificSong
}
