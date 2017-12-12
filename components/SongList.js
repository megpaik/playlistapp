import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default class SongList extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.store.dispatch(actions.addSong());
  }

  onSave(username, songlist) {
    this.props.store.dispatch(actions.save(username, songlist));
  }
  render() {
    return (
       <ScrollView style={styles.container}>
          <Text> Current Songs </Text>
          <Button title="+" onPress={this.onClick} />
          <Button title="Save Playlist" onPress={this.onSave(this.state.username, this.state.songlist)} />
        </ScrollView>
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
