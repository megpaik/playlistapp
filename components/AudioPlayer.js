import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import * as actions from '../actions.js';

export default class AudioPlayer extends React.Component {
  constructor() {
    super();
    this.onPlay = this.onPlay.bind(this);
    this.onPrev = this.onPrev.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onPlay() {
    this.props.store.dispatch(actions.play());
  }
  
  onPrev() {
    this.props.store.dispatch(actions.prevSong());
  }

  onNext() {
    this.props.store.dispatch(actions.nextSong());
  }

  render() {
    return (
      <View style={styles.container}>
        <Video> This should be the music player </Video>
        <Button title="<<" onPress={this.onPrev} />
        <Button title=">" onPress={this.onPlay} />
        <Button title=">>" onPress={this.onNext} />        
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
