import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TrackData} from '../../constants/types';
import {useContext} from 'react';
import BaseButton from '../../components/BaseButton';
import Typography from '../../components/Typography';
import {COLORS} from '../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PlaylistContext} from '../../context/PlaylistContext';
import trackDataCompare from '../../util/trackDataCompare';

interface HomeScreenItemProps {
  data: TrackData;
  isFocused: boolean;
  onPress: () => void;
}

const HomeScreenItem: React.FC<HomeScreenItemProps> = props => {
  const {data, isFocused, onPress} = props;
  const {toggle, playlist} = useContext(PlaylistContext);
  const {artist, last_week_rank, name, rank} = data;
  const isNew = !last_week_rank;
  const rankDelta = last_week_rank ? last_week_rank - rank : 0;
  const isUp = rankDelta > 0;
  const isAdded = !!playlist.find(_data => trackDataCompare(_data, data));

  return (
    <BaseButton
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: isFocused ? COLORS.gray : undefined},
      ]}
    >
      <View style={styles.rankContainer}>
        <Typography style={styles.rank}>{rank}</Typography>
        <View style={styles.rankDeltaContainer}>
          {isNew ? (
            <Typography style={styles.rankDeltaNew}>NEW</Typography>
          ) : !rankDelta ? (
            <Typography style={styles.rankDeltaSameAsLastWeek}>-</Typography>
          ) : (
            <>
              <Icon
                name={isUp ? 'chevron-double-up' : 'chevron-double-down'}
                size={16}
                color={isUp ? COLORS.red : COLORS.blue}
              />
              <Typography
                style={[
                  styles.rankDelta,
                  {color: isUp ? COLORS.red : COLORS.blue},
                ]}
              >
                {Math.abs(rankDelta)}
              </Typography>
            </>
          )}
        </View>
      </View>
      <View style={styles.nameContainer}>
        <Typography style={styles.name} numberOfLines={1}>
          {name}
        </Typography>
        <Typography style={styles.artist} numberOfLines={1}>
          {artist}
        </Typography>
      </View>
      <BaseButton onPress={() => toggle(data)} style={styles.addButton}>
        <Icon
          name={isAdded ? 'heart' : 'heart-outline'}
          size={24}
          color={COLORS.white}
        />
      </BaseButton>
    </BaseButton>
  );
};

export default HomeScreenItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankContainer: {
    width: 80,
    alignItems: 'center',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rankDeltaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 16,
    marginTop: 4,
  },
  rankDelta: {
    fontSize: 10,
    marginLeft: 2,
  },
  rankDeltaSameAsLastWeek: {
    fontSize: 10,
    color: COLORS.light_gray,
    fontWeight: 'bold',
  },
  rankDeltaNew: {
    fontSize: 10,
    color: COLORS.yellow,
    fontWeight: 'bold',
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
  addButton: {
    height: '100%',
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
