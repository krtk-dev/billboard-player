import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import Typography from '../../components/Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BorderlessButton from '../../components/BorderlessButton';
import useNavigation from '../../hooks/useNavigation';

const PlaylistScreenHeader = () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack} style={styles.drawerButton}>
        <Icon size={24} color={COLORS.white} name="chevron-left" />
      </BorderlessButton>
      <Typography style={styles.title}>Billboard Player</Typography>
    </View>
  );
};

export default PlaylistScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: STATUSBAR_HEIGHT + 56,
    paddingTop: STATUSBAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  drawerButton: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
