const login = (username, password) => {
  return {
    type: 'LOGIN',
    username: username,
    password: password
  };
};
// this changes the view to the registration screen
const linkRegister = () => {
  return {
    type: 'LINK_REGISTER'
  };
};
const register = (name, username, password) => {
  return {
    type: 'REGISTER',
    name: name,
    username: username,
    password: password
  }
}
const createRoom = () => {
  return  {
    type: 'CREATE_ROOM'
  };
};
const joinRoom = (room) => {
  return {
    type: 'JOIN_ROOM',
    code: room
  };
};
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
const search = () => {
  return {
    type: 'SEARCH'
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