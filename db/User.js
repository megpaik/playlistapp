var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds123956.mlab.com:23956/197playlist');

var _ = require('lodash');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  playlists: { type: Object }
});

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
  });

  bcrypt.hash(user.password, salt, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.statics.addUser = function(name, username, password, cb) {
  var newUser = new this({ name: name, username: username, password: password });
  newUser.save(cb);
}

userSchema.statics.checkLogin = function(username, password, cb) {
  this.findOne({ username: username}, function(err, user) {
    if (err) throw err;
    if (!user) cb('No account');
    else {
      bcrypt.compare(password, this.password, function(err, isRight) {
        if (err) return cb(err);
        cb(null, isRight);
      });
    }
  });
}

userSchema.statics.getName = function(username) {
  this.findOne({ username: username}, function(err, user) {
    if (err) throw err;
    if (!user) throw new Error('no user');
    else { 
      return this.name;
    }
  });
}

userSchema.statics.addPlaylist = function(username, playlist) {
  this.findOne({ username: username}, function(err, user) {
    if (err) throw err;
    if (!user) throw new Error('no user');
    user.playlists = _.extend(user.playlists, { playlist.name.hashCode: playlist });
    user.save(function(err) {
      if (err) throw err;
      console.log('User successfully updated!');
    });
  });
}

module.exports = mongoose.model('User', userSchema);