import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import SongList from './SongList';
import AudioPlayer from './AudioPlayer';

class RoomView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Test </Text>
        <SongList songs={this.props.songs}/>
        <AudioPlayer />
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

const mapStatetoProps = state => {
  songs: state.songs
}

const Room = connect(mapStatetoProps, null)(RoomView);

export default Room;