var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')

/* GET home page. */

router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    linkQuery.showSongs(data[0]).then((song_data)=>{
      console.log(req.params.username);
      for(var i = song_data.length - 1; i > -1; i--){
        data.push(song_data[i])
      }
      var songLength = song_data.length
      res.render('profile',{
        databoth:data[0],
        datasong:data[1],
        datasongtwo:data[2],
        datasongthree:data[3],
        songLen:songLength
      })
    })
  })
})

// router.get('/:username', function(req, res, next) {
//   linkQuery.showboth(req.params.username).then((data)=>{
//       console.log(data);
//       res.render('profile',{newest:data})
//     })
// })



router.post('/edited',(req,res)=>{
  console.log('yeah');
  linkQuery.updateUser(req.body).then((data)=>{
    console.log(req.body.username);
    console.log(data);
    res.redirect('/profile/' + req.body.username)
  })
})

router.get('/delete/:username',(req,res)=>{
  linkQuery.deleteUser(req.params.username).then(()=>{
    res.redirect('/')
  })
})



module.exports = router;
