import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class Protected extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput>Search</TextInput>
        <Button>Search</Button>
        <FlatList> Display results here </FlatList>
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
