var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
var meloldyCreation = require('../db/melody-creation')
/* GET home page. */

router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    linkQuery.showSongs(data[0]).then((song_data)=>{
      linkQuery.writtenForMe(data[0]).then((for_me_song_list)=>{
        for(var i = for_me_song_list.length - 1; i > -1; i--){
          song_data.push(for_me_song_list[i])
        }
        console.log(meloldyCreation.playChord().name);
        var songLength = song_data.length
        var forMeLength = for_me_song_list.length
        var youveWritten = songLength - forMeLength
        res.render('profile',{
          databoth:data[0],
          songLen:youveWritten,
          songTotal:songLength,
          allsongs:song_data
        })
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
