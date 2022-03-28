import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenPlayer from './HomeScreenPlayer';

const HomeScreen = () => {
  return (
    <View>
      <HomeScreenHeader />
      <HomeScreenPlayer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
