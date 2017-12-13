import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import * as actions from '../actions.js';

export default class Search extends React.Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
  }
 
  onSearch(query) {
    this.props.store.dispatch(actions.search(query));
  }

  onSelect() {
    this.props.store.dispatch(actions.select(song));
  }

  render() {
    const songs = this.state.results.map((song, i) => {
      return <SongResult store={this.props.store}/>;
    });
    return (
      <View style={styles.container}>
        <TextInput title="search" placeholder="Search Songs" />
        <Button title="Search" onPress={() => this.onSearch(query)} />
        <FlatList> {songs} </FlatList>
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
