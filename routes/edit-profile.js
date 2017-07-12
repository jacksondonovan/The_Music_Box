var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
var knex = require('../db/knex')
/* GET home page. */
router.get('/:username', function(req, res, next) {
  linkQuery.showProf(req.params.username).then((data)=>{
    res.render('edit-profile',{user:data[0]})
  })
})

// router.post('/edited'),(req,res)=>{
//
// }

module.exports = router;
