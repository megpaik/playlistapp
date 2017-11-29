const login = (id, password) => {
  return {
    type: 'LOGIN',
    id: id,
    password: password
  };
};

const register = () => {
  return {
    type: 'REGISTER'
  };
};

const createRoom = () => {
  return  {
    type: 'CREATE_ROOM'
  };
};

const joinRoom = (code) => {
  return {
    type: 'JOIN_ROOM',
    code: code
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