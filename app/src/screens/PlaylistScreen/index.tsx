import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import BaseHeader from '../../components/BaseHeader';
import Player from '../../components/Player';
import {PlaylistContext} from '../../context/PlaylistContext';

const PlaylistScreen = () => {
  const {playlist} = useContext(PlaylistContext);
  const [index, setIndex] = useState(0);

  return (
    <View>
      <BaseHeader title="Playlist" />
      {playlist.length && (
        <Player
          videoId={playlist[index].youtube_id}
          onEnded={() => setIndex(idx => (idx + 1) % playlist.length)}
        />
      )}
    </View>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({});
