import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useNavigation from '../hooks/useNavigation';
import BorderlessButton from './BorderlessButton';
import Typography from './Typography';
import {COLORS, STATUSBAR_HEIGHT} from '../constants/styles';

interface BaseHeaderProps {
  title?: string;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({title}) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBack} style={styles.backButton}>
        <Icon size={24} color={COLORS.white} name="chevron-left" />
      </BorderlessButton>
      <Typography style={styles.title}>{title}</Typography>
    </View>
  );
};

export default BaseHeader;

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
    fontWeight: 'bold',
  },
  backButton: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
