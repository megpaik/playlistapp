import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import * as actions from '../actions.js';

export default class SongResult extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    var song = {title: this.props.title, artist: this.props.artist, url: this.props.url};
    this.props.store.dispatch(actions.select(song));
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onClick}>
        <Text> {this.props.title} </Text>
        <Text> {this.props.artist} </Text>
      </TouchableOpacity>
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
