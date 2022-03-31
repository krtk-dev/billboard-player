import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import Typography from '../../components/Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BorderlessButton from '../../components/BorderlessButton';
import useNavigation from '../../hooks/useNavigation';

const HomeScreenHeader = () => {
  // @ts-ignore
  const {openDrawer, navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>Billboard Player</Typography>
      <View style={{flexDirection: 'row'}}>
        <BorderlessButton
          onPress={() => navigate('Playlist')}
          style={[styles.button, {marginRight: -4}]}
        >
          <Icon size={24} color={COLORS.white} name="heart-multiple-outline" />
        </BorderlessButton>
        <BorderlessButton onPress={openDrawer} style={styles.button}>
          <Icon size={24} color={COLORS.white} name="menu" />
        </BorderlessButton>
      </View>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: STATUSBAR_HEIGHT + 56,
    paddingTop: STATUSBAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
