// Lib
var express = require('express');
var router  = express.Router();
yaml        = require('js-yaml')
var fs      = require('fs');

// Locals
var spoilers = yaml.safeLoad(fs.readFileSync('./resources/spoilers.yml', 'utf8'));


router.get("/", function(req, res){
  res.redirect("/spoiler-topics");
})

router.get('/spoiler-topics', function(req, res) {
  topics = []
  for (i in spoilers) { topics.push(i); }

  res.send(topics.sort());
});


router.get('/spoilers', function(req, res) {
  res.send(spoilers);
});


router.get('/spoilers/:topic', function(req, res){
  topic   = req.params.topic;
  spoiler = spoilers[topic];
  message = (spoiler) ? spoiler : "could not be be found";

  res.send({spoiler: message});
});

module.exports = router;
