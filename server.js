var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var login = require('./routers/login');
var register = require('./routers/register');
var save = require('./routers/save');
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('Hello world');
});

// set up server-side sockets
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('room', function(roomCode) {
    socket.join(roomCode);
    socket.room = room;
    // io.sockets.in(room).broadcast.emit('notification', "New User Joined");
    io.emit('current_state', {data: "list of songs"});
  });
  // socket.on('user_left', function (data) {
  //   io.in(socket.room).broadcast.emit('notification', "User Disconnected");
  // });
  socket.on('song_vetoed', function (data) {
    io.in(socket.room).emit('incr_count', {data: "which song, incr count"});
  });
  socket.on('song_added', function (data) {
    // io.in(socket.room).emit('notification', data.user + ' added ' + data.songTitle);
    io.in(socket.room).emit('add_song', {data: "send updated song list"});
  });
  socket.on('song_removed', function (data) {
    // io.in(socket.room).emit('notification', data.songTitle + 'was removed');
    io.in(socket.room).emit('remove_song', {data: 'send updated song list'})
  })
});

app.use('/', login);
app.use('/', register);
app.use('/', save);

http.listen(port, function(){
  console.log('Magic happens on Port 3000');
});
    