var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userid', function(req, res) {
  let id = req.params.userid;
  res.json({userid: id});
});

module.exports = router;
