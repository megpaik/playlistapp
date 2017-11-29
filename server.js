var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Hello world');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('room', function(room) {
    socket.join(room);
    socket.set('room', room);
    io.sockets.in(room).broadcast.emit('notification', "New User Joined");
    socket.emit('current_state', {data: "list of songs"});
  });
  socket.on('user_left', function (data) {
    io.in(socket.room).broadcast.emit('notification', "User Disconnected");
  });
  socket.on('song_vetoed', function (data) {
    io.in(socket.roomroom).emit('incr_count', {data: "which song, incr count"});
  });
  socket.on('song_added', function (data) {
    io.in(socket.room).emit('notification', data.user + ' added ' + data.songTitle);
    io.in(socket.room).emit('add_song', {data: "send updated song list"});
  });
  socket.on('song_removed', function (data) {
    io.in(socket.room).emit('notification', data.songTitle + 'was removed');
    io.in(socket.room).emit('remove_song', {data: 'send updated song list'})
  })
});

http.listen(3000, function(){
  console.log('Magic happens on Port 3000');
});
    