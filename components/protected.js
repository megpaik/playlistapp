import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as actions from '../actions.js';

export default class Protected extends React.Component {

  constructor() {
    super();
    this.onJoin = this.onJoin.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onJoin(code) {
    this.props.store.dispatch(actions.joinRoom(code));
  }

  onCreate() {
    this.props.store.dispatch(actions.createRoom());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome, {this.props.nickname} </Text>
        <TextInput title="code" placeholder="Room Code" />
        <Button title="Join Room" onPress={() =>this.onJoin(code)} />
        <Button title="Create Room" onPress={this.onJoin}/>
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
