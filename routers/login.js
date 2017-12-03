var express = require('express');
var router = express.Router();
var User = require('../db/User');

router.post('/login', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  User.checkLogin(username, password, function(err, isRight) {
    if (err) {
      res.send(err);
    }
    if (isRight) {
      var name = User.getName(username);
      res.send({name: name, username: username});
      // res.redirect('/protected');
    } else {
      res.status(400);
      res.send('wrong');
    }
  });
});

module.exports = router;