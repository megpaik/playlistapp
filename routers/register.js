var express = require('express');
var router = express.Router();
var User = require('../db/User');

router.post('/register', function (req, res, next) {
  var name = req.body.name;
  var username = req.body.username;
  var password = req.body.password;
  User.addUser(name, username, password, (err) => {
    if (err) res.send(err);
    console.log('user successfully saved'); 
    res.status(202);
    res.send({name: name, username: username});
  });
});

module.exports = router;