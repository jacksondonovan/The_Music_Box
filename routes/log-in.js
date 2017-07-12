var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('log-in');
});

router.post('/profile',(req,res)=>{
  res.redirect('/profile/' + req.body.username)
})
module.exports = router;
