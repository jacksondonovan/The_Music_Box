var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
var bcrypt = require('bcrypt')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('log-in')
})

router.post('/profile',(req,res)=>{
  linkQuery.specificUser(req.body.username).first().then((user)=>{
    if(user){
      bcrypt.compare(req.body.password,user.password).then((data)=>{
        if(data){
          res.redirect('/profile/' + req.body.username)
        } else{
          console.log("INCOREECT PASS");
          res.redirect('/log-in')
        }
      })
    } else{
      console.log('INCORRECT UNAME');
      res.redirect('/log-in')
    }
  })
})

module.exports = router;
