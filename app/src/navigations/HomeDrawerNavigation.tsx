import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeDrawerScreen from '../screens/HomeDrawerScreen';
import HomeScreen from '../screens/HomeScreen';

export type DrawerParamList = {
  Home: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();

const HomeDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <HomeDrawerScreen />}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigation;
