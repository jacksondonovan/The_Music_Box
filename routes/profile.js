var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
/* GET home page. */
router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    linkQuery.showSongs(data[0]).then((song_data)=>{
      console.log(data[0].id);
      data.push(song_data)
      console.log(data);
      res.render('profile',{newest:data[0]})
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
  linkQuery.deleteUser(req.params.username).then(()=>{
    res.redirect('/')
  })
})



module.exports = router;
