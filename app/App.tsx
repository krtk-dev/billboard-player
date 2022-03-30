import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigations';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from './src/constants/styles';
import PlayerProvider from './src/context/PlayerContext';
import {PersistedStateProvider} from 'react-native-use-persisted-state';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <PersistedStateProvider>
      <PlayerProvider>
        <SafeAreaProvider>
          <View style={{backgroundColor: COLORS.black, flex: 1}}>
            <StatusBar
              barStyle="light-content"
              translucent
              animated
              backgroundColor="transparent"
            />
            <Navigation />
          </View>
        </SafeAreaProvider>
      </PlayerProvider>
    </PersistedStateProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
