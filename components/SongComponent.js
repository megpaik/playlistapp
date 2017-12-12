import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as actions from '../actions.js';

export default class SongComponent extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    var song = {title: this.props.title, artist: this.props.artist, url: this.props.url};
    this.props.store.dispatch(actions.veto(song));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.title} </Text>
        <Text> {this.props.artist} </Text>
        <Button title="Veto" onPress={this.onClick} />
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
