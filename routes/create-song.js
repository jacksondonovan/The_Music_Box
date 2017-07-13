var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
/* GET home page. */
router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    res.render('create-song',{user:data[0]})
  })
})

router.post('/new-song',(req,res)=>{
  linkQuery.addSong(req.body).then(()=>{
    console.log("JUST BEFORE ROUTE CHANGE");
    res.redirect('/profile/' + req.body.written_by)
  })
})

module.exports = router;