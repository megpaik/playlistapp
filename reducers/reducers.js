import _ from 'lodash';
import * as uuid from 'uuid';

// var socket = io('http://localhost:3000');

// THIS IS SO WRONG FIX IT
// const socketListeners = (state, action) => {
//   socket.on('current_state', (songs) => {
//   return _.assign({}, state, songs);
//   });
//   socket.on('incr_count', (songs) => {
//     return _.assign({}, state, songs)
//   });
//   socket.on('add_song', (songs) => {
//     return _.assign({}, state, songs)
//   });
//   socket.on('remove_song', (songs) => {
//     return _.assign({}, state, songs)  
//   });
// }
const initialState = {
    songs: [{title: "Hello", artist: "Adele", url:""}],
    currentlyPlaying: {
      title: null,
      artist: null
    },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'ADD_SONG': {
    //redirect
  }

  case 'VETO': {
    // socket.emit('song_vetoed', action.song);
    return state;
  }

  case 'SAVE': {
    fetch('/save', {
      method: 'POST',
      body: {username: username, songlist: songlist}
    }).then((res) => { return state });
  }
/********************************************
 **************** SEARH PAGE ****************
 ********************************************/
  case 'FOUND_SONGS':
  const {songs} = action;
  var updated = (songs.map((song, i) => {return {title: song.title, artist: song.artist, url: song.url}}));
  return _.assign({}, state, {search: updated});
  case 'SELECT': {
    // socket.emit('song_added', action.song);
  }
/********************************************
 ********** MUSIC PLAYER CONTROLS************
 ********************************************/
  case 'PLAY': {
    
  }

  case 'PREV_SONG': {
    
  }

  case 'NEXT_SONG': {
    
  }
  default: {
    return state;
  }
  }

}
export default mainReducer;
