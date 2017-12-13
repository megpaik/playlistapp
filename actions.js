import { search } from './API/soundcloudhelper';


// this should reroute to the search page
const addSong = () => {
  return {
    type: 'ADD_SONG'
  };
};
const veto = (song) => {
  return {
    type: 'VETO',
    song: song
  };
};
const save = (username, songlist) => {
  return {
    type: 'SAVE',
    username: username,
    songlist: songlist
  }
}
/********************************************
 **************** SEARH PAGE ****************
 ********************************************/
const submit = (query) => {
  return function (dispatch) {
    search(query)
    .then(result => { 
      dispatch(foundSongs(result.collection));
    })
  }
}
const foundSongs = (songs) => {
  return {
    type: 'FOUND_SONGS',
    songs: songs
  }
}
const select = (song) => {
  return {
    type: 'SELECT',
    song: song
  }
}
/********************************************
 ********** MUSIC PLAYER CONTROLS************
 ********************************************/
const play = () => {
  return {
    type: 'PLAY'
  }
};
const prevSong = () => {
  return {
    type: 'PREV_SONG'
  }
};
const nextSong = () => {
  return {
    type: 'NEXT_SONG'
  };
}

export const playGenre = (genre) => {
  return function (dispatch) {
      dispatch(playingGenre(genre));

      search(genre.name)
        .then(result => {
            dispatch(foundSongs(result.collection, genre));
            dispatch(setCurrentSong(0));
            dispatch(playCurrentSong());
        });
  }
};

export const setCurrentSong = (index) => ({
  type: 'SET_CURRENT_SONG',
  index
});

export const playCurrentSong = () => {
  return function (dispatch, getState) {
      const { songs, currentlyPlaying } = getState();

      let song = null;

      if (currentlyPlaying.genre && currentlyPlaying.songIndex >= 0) {
          if (songs[currentlyPlaying.genre.id]) {
              song = songs[currentlyPlaying.genre.id][currentlyPlaying.songIndex];
          }
      }
      dispatch(_updatePaused(false));
  }
};

export const pauseCurrentSong = () => {
  return function (dispatch) {
      dispatch(_updatePaused(true));
  }
};

const _updatePaused = (paused) => ({
  type: 'UPDATE_PAUSED',
  paused
});

export const playNextSong = () => {
  return function (dispatch, getState) {
      const { songIndex, title } = getState().currentlyPlaying,
            songs = getState().songs[genre.id];

      dispatch(setCurrentSong((songIndex+1)%songs.length));
      dispatch(playCurrentSong());
  }
};

export const playPreviousSong = () => {
  return function (dispatch, getState) {
      const { songIndex } = getState().currentlyPlaying,
            newIndex = songIndex - 1;

      dispatch(setCurrentSong(newIndex < 0 ? 0 : newIndex));
      dispatch(playCurrentSong());
  }
}

export const updatePlayTime = (currentTime) => {
  return function (dispatch) {
      dispatch(_setPlayTime(currentTime));
  }
}

const _setPlayTime = (currentTime) => ({
  type: 'SET_PLAY_TIME',
  currentTime
});

export {addSong, veto, save, search, select, play, prevSong, nextSong}