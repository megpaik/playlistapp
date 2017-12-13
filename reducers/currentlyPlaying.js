const initialCurrentlyPlaying = {
  songIndex: -1,
  paused: false
}

const currentlyPlaying = (state = initialCurrentlyPlaying, action) => {
  switch (action.type) {
      case 'PLAYING_GENRE':
          return Object.assign({}, state,
                               {
                                   genre: action.title,
                                   paused: false,
                                   currentTime: 0
                               });
      case 'SET_CURRENT_SONG':
          return Object.assign({}, state,
                               {
                                   songIndex: action.index
                               });
      case 'UPDATE_PAUSED':
          return Object.assign({}, state,
                               {
                                   paused: action.paused
                               });
      case 'SET_PLAY_TIME':
          return Object.assign({}, state,
                               {
                                   currentTime: action.currentTime
                               });

      default:
          return state;
  }
}

export default currentlyPlaying;