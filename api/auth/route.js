var router = require('express').Router();
var jwt = require("jsonwebtoken");
var User = require('../user/model');

router.post('/', function(req, res) {
  User.findOne({name: req.body.name, password: req.body.password}, function(err, user) {
    if (err) res.send(err)
    else {
      if (user) res.json(jwt.sign(user, 'thisisasupersecret'));
      else res.send(401);
    }
  });
});

module.exports = router;
