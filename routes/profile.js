var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
var meloldyCreation = require('../db/melody-creation')
/* GET home page. */

router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    linkQuery.showSongs(data[0]).then((song_data)=>{
      console.log(meloldyCreation.playChord());
      for(var i = song_data.length - 1; i > -1; i--){
        data.push(song_data[i])
      }
      var songLength = song_data.length
      res.render('profile',{
        databoth:data[0],
        datasong:data[1],
        datasongtwo:data[2],
        datasongthree:data[3],
        songLen:songLength,
        randomprog: meloldyCreation.playChord()
      })
    })
  })
})



router.post('/edited',(req,res)=>{
  console.log('yeah');
  linkQuery.updateUser(req.body).then((data)=>{
    console.log(req.body.username);
    console.log(data);
    res.redirect('/profile/' + req.body.username)
  })
})

router.get('/delete/:username',(req,res)=>{
  linkQuery.deleteSong(req.params.username).then(()=>{
    linkQuery.deleteUser(req.params.username).then(()=>{
      res.redirect('/')
    })
  })
})



module.exports = router;
