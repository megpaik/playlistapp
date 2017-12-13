import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { updatePlayTime, playNextSong } from '../actions';
import { streamUrl } from '../API/soundcloudhelper';
import { connect } from 'react-redux';
import Video from 'react-native-video';
import Controls from './Controls';

class AudioPlayerView extends React.Component {
  getsong() {
    const { songs, currentlyPlaying } = this.props;

    let song = null;

    if (currentlyPlaying.genre && currentlyPlaying.songIndex >= 0) {
        if (songs[currentlyPlaying.genre.id]) {
            song = songs[currentlyPlaying.genre.id][currentlyPlaying.songIndex];
        }
    }

    return song;
  }
  getpercentPlayed() {
    const { currentlyPlaying: { currentTime } } = this.props;

    return currentTime / (this.song.full_duration/1000);
}

onPlayProgress = ({ currentTime }) => {
    this.props.dispatch(updatePlayTime(currentTime))
}

onPlayEnd = () => {
    this.props.dispatch(playNextSong())
}

render() {
  const { currentlyPlaying: { paused, currentTime } } = this.props,
        { dispatch } = this.props;

  if (!this.song) {
      return (
          <Text style={{height: 85, alignItems: "center"}}> Nope </Text>
      );
  }
  return (
      <View style={{height: 85, alignItems: 'center'}}>
          <Video source={{uri: streamUrl(this.song.uri) }}
                 ref="audio"
                 volume={1.0}
                 muted={false}
                 paused={paused}
                 playInBackground={true}
                 playWhenInactive={true}
                 onProgress={this.onPlayProgress}
                 onEnd={this.onPlayEnd}
                 resizeMode="cover"
                 repeat={false}/>
          <View style={{position: 'absolute', top: 0, height: 85, alignItems: 'center'}}>
              <Controls />
          </View>
      </View>
  )
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


const AudioPlayer = connect(
  (state) => ({
      currentlyPlaying: state.currentlyPlaying,
      songs: state.songs
  })
)(AudioPlayerView);

export default AudioPlayer;