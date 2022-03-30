import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import PlaylistScreen from '../screens/PlaylistScreen';
import HomeDrawerNavigation from './HomeDrawerNavigation';

export type RootStackParamList = {
  HomeDrawer: undefined;
  Playlist: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeDrawer"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <RootStack.Screen name="HomeDrawer" component={HomeDrawerNavigation} />
      <RootStack.Screen name="Playlist" component={PlaylistScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
