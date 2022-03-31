import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigations';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS} from './src/constants/styles';
import ChartProvider from './src/context/ChartContext';
import {PersistedStateProvider} from 'react-native-use-persisted-state';
import PlaylistProvider from './src/context/PlaylistContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <PersistedStateProvider>
      <PlaylistProvider>
        <ChartProvider>
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
        </ChartProvider>
      </PlaylistProvider>
    </PersistedStateProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
