import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import SongList from './SongList';
import AudioPlayer from './AudioPlayer';

export default class Room extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Room: {this.state.room} </Text>
        <SongList store={this.props.store}/>
        <AudioPlayer store={this.props.store}/>
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
