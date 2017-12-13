import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { addSong } from '../actions';
import SongComponent from './SongComponent';

class SongListView extends React.Component {
  render() {
    return (
       <ScrollView>
        <Text> Current Songs </Text>
        {this.props.songs.map((song, i) => <SongComponent title={song.title} artist={song.artist} url={song.url} />)};
        <Button title="+" onPress={this.props.addSong} />
        </ScrollView>
    );
  }
}
// <Button title="Save Playlist" onPress={this.onSave(this.state.username, this.state.songlist)} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapDispatchToProps = {
  addSong
}

const SongList = connect(null, mapDispatchToProps)(SongListView);

export default SongList;