import React, { useEffect } from 'react';
import AppContainer from './src/screens'
import messaging from '@react-native-firebase/messaging';

const App = () => {

  useEffect(() => {
    try {
      messaging().registerForRemoteNotifications();
    } catch (error) {

    }
  }, [])

  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
