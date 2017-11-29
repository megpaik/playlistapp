import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Protected extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput>Name</TextInput>
        <TextInput>Username</TextInput>
        <TextInput>Password</TextInput>
        <Button>REGISTER</Button>
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
