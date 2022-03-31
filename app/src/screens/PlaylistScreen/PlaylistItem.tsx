import {Image, StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {TrackData} from '../../constants/types';
import {PlaylistContext} from '../../context/PlaylistContext';
import BaseButton from '../../components/BaseButton';
import Typography from '../../components/Typography';
import {COLORS} from '../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface PlaylistItemProps {
  data: TrackData;
  isFocused: boolean;
  onPress: () => void;
}

const PlaylistItem: React.FC<PlaylistItemProps> = props => {
  const {data, isFocused, onPress} = props;
  const {toggle} = useContext(PlaylistContext);
  const {artist, image, name} = data;

  return (
    <BaseButton
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: isFocused ? COLORS.gray : undefined},
      ]}
    >
      <Image style={styles.image} source={{uri: image}} />
      <View style={styles.nameContainer}>
        <Typography style={styles.name} numberOfLines={1}>
          {name}
        </Typography>
        <Typography style={styles.artist} numberOfLines={1}>
          {artist}
        </Typography>
      </View>
      <BaseButton onPress={() => toggle(data)} style={styles.removeButton}>
        <Icon name="trash-can" size={16} color={COLORS.white} />
      </BaseButton>
    </BaseButton>
  );
};

export default PlaylistItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 12,
    marginTop: 8,
  },
  removeButton: {
    height: '100%',
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
