var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/spoiler-topics', function(req, res) {
  res.send("spoiler-list-here");
});

module.exports = router;
