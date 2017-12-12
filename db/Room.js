var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds123956.mlab.com:23956/197playlist');

var _ = require('lodash');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true},
  username: {type: String, required: true},
  songlist: {type: Array}
});

// userSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(10, function(err, salt) {
//     if (err) return next(err);
//   });

//   bcrypt.hash(user.password, salt, function (err, hash) {
//     if (err) return next(err);
//     user.password = hash;
//     next();
//   });
// });

roomSchema.statics.createRoom = function(name, code, username, cb) {
  var newRoom = new this({ name: name, code: code, username: username });
  newRoom.save(cb);
}

roomSchema.statics.addSong = function(song) {
  this.findOne({ code: code}), function(err, room) {
    if (err) cb(err);
    if (!room) cb(new Error('no room'));
    room.songlist = _.extend(room.songlist, song);
    room.save(function(err) {
      if (err) throw err;
      console.log('Song successfully added');
    });
  }    
}

roomSchema.statics.getSonglist = function (code) {
  this.findOne( {code: code }, function(err, room) {
    if (err) throw err;
    if (!user) throw new Error('no room');
    else { 
      return this.songlist;
    }
  })
}

module.exports = mongoose.model('Room', roomSchema);