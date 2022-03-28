import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {WIDTH} from '../../constants/styles';
import {PlayerContext} from '../../context/PlayerContext';

const HomeScreenPlayer = () => {
  const {index, data, next} = useContext(PlayerContext);

  if (!data) return null;

  return (
    <YoutubePlayer
      width={WIDTH}
      play={true}
      onChangeState={e => e === 'ended' && next()}
      height={(WIDTH * 9) / 16}
      videoId={data[index].youtube_id}
    />
  );
};

export default HomeScreenPlayer;

const styles = StyleSheet.create({});
