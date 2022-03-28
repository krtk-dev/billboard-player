import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RootStackNavigation, {RootStackParamList} from './RootStackNavigation';

import React from 'react';
import {COLORS} from '../constants/styles';
import {DrawerParamList} from './HomeDrawerNavigation';

export type NavigationParamList = RootStackParamList & DrawerParamList;

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {...DefaultTheme.colors, background: COLORS.white},
      }}
    >
      <RootStackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
