var router = require('express').Router();
var User = require('./model');

router.get('/', function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err)
    else res.json(users);
  });
});

router.post('/', function(req, res) {
  User.create({
      name: req.body.name,
      password: req.body.password
  }, function(err, todo) {
    if (err) res.send(err);
    else res.end();
  });
});

module.exports = router;
