import _ from 'lodash';
import * as uuid from 'uuid';

var socket = io('http://localhost:3000');

socket.on('current_state', (songs) => {
  return _.assign({}, state, songs);
});
socket.on('incr_count', (songs) => {
  return _.assign({}, state, songs)
});
socket.on('add_song', (songs) => {
  return _.assign({}, state, songs)
});
socket.on('remove_song', (songs) => {
  return _.assign({}, state, songs)  
});

const mainReducer = (state, action) => {
  switch (action.type) {
  case 'LOGIN': {
    fetch("/login", {
      method: "POST",
      body: {username: action.username, password: action.password}
    }).then((res) => {
      if (res.status) return state;
      return _.assign({}, state, {name: res.body.name, username: res.body.username});
    }).catch((err) => { throw err });
  }
  
  case 'LINK_REGISTER': {
    // change view to registration
  }

  case 'REGISTER': {
    fetch('/register', {
      method: 'POST',
      body: {name: action.name, username: action.username, password: action.password}
    }).then((res) => {
      if (res === 'success') {
        var cred = {name: res.body.name, username: res.body.username};
        return _.assign({}, state, cred);
      }
    });
  }

  case 'CREATE_ROOM': {
    var code = Math.random().toString(36).substring(7);
    socket.emit('room', code);
    return _.assign({}, state, {room: code});
    // redirect
  }

  case 'JOIN_ROOM': {
    socket.emit('room', action.room);
    return _.assign({}, state, {room: action.room});
  }

  case 'ADD_SONG': {
    //redirect
  }

  case 'VETO': {
    socket.emit('song_vetoed', action.song);
    return state;
  }

  case 'SAVE': {
    fetch('/save', {
      method: 'POST',
      body: {}
    })
  }

  case 'SEARCH': {
    
  }

  case 'SELECT': {
    socket.emit('song_added', action.song);
  }

  case 'PLAY': {
    
  }

  case 'PREV_SONG': {
    
  }

  case 'NEXT_SONG': {
    
  }
  }
}