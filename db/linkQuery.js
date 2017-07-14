const knex = require('./knex')

function specificUser(obj){
  return knex('users').where('username',obj)
}

function adduser(obj){
  return knex('users').insert(obj)
}

function addSong(obj){
  obj.by_name = obj.written_by
  return knex('songs').insert(obj)
}

function showProf(obj){
  return knex('users').select().where('username',obj)
}

// function showboth(obj){
//   var together = {}
//   var userinfo = knex('users').select().where('username',obj)
//   var songinfo = knex('songs').select().where('by_name',obj)
//   together.userinfo = userinfo
//   together.songinfo = songinfo
//   console.log(together);
//   return together
// }

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
  return knex('songs').select().where('by_name',obj.username)
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
  grabsongs,
  showSongs,
}
