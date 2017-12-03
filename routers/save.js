var express = require('express');
var router = express.Router();
var User = require('../db/User');

router.post('/save', function (req, res, next) {
  var username = req.body.username;
  var songlist = req.body.songlist;
  User.addPlaylist(username, songlist, (err) => {
    if (err) res.send(err);
  });
  res.send('completed');
});

module.exports = router;