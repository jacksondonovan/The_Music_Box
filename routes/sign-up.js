var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')

router.get('/',(req,res)=>{
  res.render('sign-up')
})

router.post('/profile',(req,res)=>{
  linkQuery.adduser(req.body).then(()=>{
    linkQuery.specificuser(req.body.username).then((user)=>{
      console.log(user[0].username);
      res.redirect('/profile/' + user[0].username)
    })
  })
})


module.exports = router;
