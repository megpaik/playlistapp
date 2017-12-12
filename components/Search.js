import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class Search extends React.Component {
  constructor() {
    super();
    
  }
 
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
