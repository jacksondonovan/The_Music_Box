var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
/* GET home page. */
router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    res.render('create-song',{user:data[0]})
  })
})

module.exports = router;
