import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as initialState from '../initialState.js';
import * as actions from '../actions.js';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.onLogin = this.onLogin.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  componentDidMount() {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  onLogin(username, password) {
    this.props.store.dispatch(actions.login(username, password));
  }

  // need to change the screen to register - maybe use NavStack?
  onRegister() {
    this.props.store.dispatch(actions.linkRegister());
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput title="username" placeholder="Username"></TextInput>
        <TextInput title="password" placeholder="Password"></TextInput>
        <Button title="LOGIN" onPress={() => this.onLogin(username, password)}/>
        <Button title="REGISTER" onPress={this.onRegister}/>
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
