import React, { useEffect } from 'react';
import AppContainer from './src/screens'
import messaging from '@react-native-firebase/messaging';
import { AsyncStorage, Alert, Linking, Text, View } from 'react-native';

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.koreanthinker.billboard'

const App = () => {

  useEffect(() => {
    try {
      messaging().registerForRemoteNotifications();
      rate()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const rate = async () => {
    let load = await AsyncStorage.getItem('LOAD')
    if (load === 'FALSE') return
    if (load === null) load = '1'
    AsyncStorage.setItem('LOAD', (parseInt(load) + 1).toString())
    if (parseInt(load) % 30 === 0) {
      Alert.alert(
        'Please rate us!',
        'Rate is a big help for us.',
        [
          {
            text: "close",
            style: 'cancel'
          },
          {
            text: "OK",
            onPress: () => {
              AsyncStorage.setItem('LOAD', 'FALSE')
              Linking.openURL(PLAY_STORE)
            }
          }

        ],
        { cancelable: false }
      )
    }

  }

  return (
    <>
      {/* <View>
        <Text>hi</Text>
      </View> */}
      <AppContainer />
    </>
  );
};

export default App;
