import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers'
import * as initialState from './initialState';
import * as actions from './actions'
import Login from './components/Login'

const store = createStore(reducers, initialState);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login store={store}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
