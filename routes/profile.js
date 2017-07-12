var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
var knex = require('../db/knex')
/* GET home page. */
router.get('/:username', function(req, res, next) {
  var obj = req.params.username
  knex('users').select().where('username',obj).then((data)=>{
    res.render('profile',{info:data[0]})
  })
  // linkQuery.showProf(req.p).then((data)=>{
  // res.render('profile',{info:data[0]})
})


module.exports = router;
