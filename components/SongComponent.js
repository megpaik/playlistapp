import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { veto } from '../actions'

class SongComponentView extends React.Component {
  render() {
    var song = {title: this.props.title, artist: this.props.artist, url: this.props.url};    
    return (
      <View style={styles.container}>
        <Text> {this.props.title} </Text>
        <Text> {this.props.artist} </Text>
        <Button title="Veto" onPress={this.props.veto(song)} />
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

const mapDispatchToProps = {
  veto
}

const SongComponent = connect(null, mapDispatchToProps)(SongComponentView);

export default SongComponent;