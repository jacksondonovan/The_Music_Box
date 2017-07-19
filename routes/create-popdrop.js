var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
/* GET home page. */
router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    res.render('create-popdrop',{user:data[0]})
  })
})

router.post('/new-song',(req,res)=>{
  linkQuery.addSong(req.body).then(()=>{
    res.redirect('/profile/' + req.body.written_by)
  })
})

//join table or push song data into promise array and access it with data[1]

module.exports = router;
