var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')

router.get('/',(req,res)=>{
  res.render('sign-up')
})

router.post('/profile',(req,res)=>{
  linkQuery.adduser(req.body).then(()=>{
    res.redirect('/profile/' + req.body.username)
  })
})


module.exports = router;
