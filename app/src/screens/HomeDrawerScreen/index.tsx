import {Linking, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, STATUSBAR_HEIGHT} from '../../constants/styles';
import InAppReview from 'react-native-in-app-review';
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  PRIVACY_POLICY_URL,
} from '../../constants/values';
import BaseButton from '../../components/BaseButton';
import Typography from '../../components/Typography';
import {PlayerContext} from '../../context/PlayerContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeDrawerScreen = () => {
  const {date} = useContext(PlayerContext);
  const {bottom} = useSafeAreaInsets();

  const MENUS = [
    {
      icon: 'star-outline',
      title: 'Rate us',
      onPress: () => InAppReview.RequestInAppReview(),
    },
    {
      icon: 'police-badge-outline',
      title: 'Privacy policy',
      onPress: () => Linking.openURL(PRIVACY_POLICY_URL),
    },
    {
      icon: 'github',
      title: 'Github',
      onPress: () => Linking.openURL(GITHUB_URL),
    },
    {
      icon: 'instagram',
      title: 'Instagram',
      onPress: () => Linking.openURL(INSTAGRAM_URL),
    },
  ];

  return (
    <View style={[styles.container, {paddingBottom: bottom + 16}]}>
      {MENUS.map(({icon, onPress, title}) => (
        <BaseButton key={title} style={styles.itemContainer} onPress={onPress}>
          <Icon name={icon} color={COLORS.white} size={24} />
          <Typography style={styles.itemTitle}>{title}</Typography>
        </BaseButton>
      ))}
      <View style={{flex: 1}} />
      <View style={styles.itemContainer}>
        <Icon name="update" color={COLORS.white} size={24} />
        <Typography style={styles.itemTitle}>Last update {date}</Typography>
      </View>
    </View>
  );
};

export default HomeDrawerScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark_gray,
    flex: 1,
    paddingTop: 56 + STATUSBAR_HEIGHT,
  },
  itemContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  itemTitle: {
    marginLeft: 16,
    fontWeight: 'bold',
  },
});
