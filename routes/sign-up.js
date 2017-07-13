var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
var bcrypt = require('bcrypt')

router.get('/',(req,res)=>{
  res.render('sign-up')
})

router.post('/profile',(req,res)=>{
  linkQuery.specificUser(req.body.username).first().then((user)=>{
    if(user){
      res.redirect('/sign-up')
    } else{
      bcrypt.hash(req.body.password,10).then((hash)=>{
        var newUser = req.body
        newUser.password = hash
        linkQuery.adduser(newUser).then(()=>{
          res.redirect('/profile/' + newUser.username)
        })
      })
    }
  })
})


module.exports = router;
