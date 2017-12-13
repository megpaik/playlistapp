import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import SongList from './components/SongList';
import AudioPlayer from './components/AudioPlayer';

// import AppReducer from './reducers/index'
import mainReducer from './reducers/reducers'
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  mainReducer, 
  applyMiddleware(
    thunkMiddleware, 
    createLogger()
  )
);
const Room = connect((state) => ({
  songs: state.songs
})
)(({ songs }) => (
      <View style={styles.container}>
        <Text>            </Text>
        <Text> Room</Text>
        <SongList songs={songs}/>
        <AudioPlayer />
      </View>
    ));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStatetoProps = state => {
//   songs: state.songs
// }

// const Room = connect(mapStatetoProps)(RoomView);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Room />
      </Provider>
    );
  }
}
