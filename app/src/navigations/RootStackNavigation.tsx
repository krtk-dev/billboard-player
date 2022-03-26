import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import HomeDrawerNavigation from './HomeDrawerNavigation';

export type RootStackParamList = {
  HomeDrawer: undefined;
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
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
