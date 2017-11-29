import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput>Username</TextInput>
        <TextInput>Password</TextInput>
        <Button>Login </Button>
        <Button>Register </Button>
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
