import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as actions from '../actions.js';

export default class Register extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(name, username, password) {
    this.props.store.dispatch(actions.register(name, username, password));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput title="name" placeholder="Name" />
        <TextInput title="username" placeholder="Username" />
        <TextInput title="password" placeholder="Password" />
        <Button title="REGISTER" onPress={() => this.onClick(name, username, password)} />
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
