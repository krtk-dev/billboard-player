import React, { useEffect } from 'react';
import AppContainer from './src/screens'
import BottomBannerAds from './src/components/View/BottomBannerAds';
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
      <BottomBannerAds />
    </>
  );
};

export default App;
