import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useIsFocused} from '@react-navigation/native';
import {WIDTH} from '../constants/styles';

interface PlayerProps {
  videoId: string;
  onEnded: () => void;
}

const Player: React.FC<PlayerProps> = ({onEnded, videoId}) => {
  const isFocused = useIsFocused();

  return (
    <YoutubePlayer
      width={WIDTH}
      play={isFocused}
      onChangeState={e => e === 'ended' && onEnded()}
      height={(WIDTH * 9) / 16}
      videoId={videoId}
    />
  );
};

export default Player;
