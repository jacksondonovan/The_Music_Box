var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
var knex = require('../db/knex')
/* GET home page. */
router.get('/:song_title', function(req, res, next) {
  linkQuery.specificSong(req.params.song_title).then((data)=>{
    res.render('review-song',{specificSong:data[0]})
  })
})

module.exports = router;
