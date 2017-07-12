var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('log-in');
});

router.post('/profile',(req,res)=>{
  linkQuery.showProf(req.body.username).then((data)=>{
    console.log(data[0]);
    res.redirect('/profile/' + req.body.username)
  })
})

module.exports = router;
