import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default class Room extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Room: {this.state.room} </Text>
        <ScrollView>
          <Text> Current Songs </Text>
          <Button> + </Button>
          <Button> Save Playlist </Button>
        </ScrollView>
        <View style={styles.container}>
          <Video> This should be the music player </Video>
        </View>
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
