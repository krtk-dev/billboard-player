import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './src/navigations';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        translucent
        animated
        backgroundColor="transparent"
      />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
