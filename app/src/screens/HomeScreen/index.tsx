import React, { useState, useEffect } from 'react'
import { View, AsyncStorage, BackHandler, ToastAndroid } from 'react-native'
import Header from './Header'
import Body from './Body'
import Drawer from './Drawer';
import Modal from 'react-native-modal';
import BottomBannerAds from '../../components/View/BottomBannerAds';
import { InterstitialAd } from '@react-native-firebase/admob';
import { ADMOBEXIT } from '../../../secret';

const exitIntersitial = InterstitialAd.createForAdRequest(ADMOBEXIT, {
    requestNonPersonalizedAdsOnly: true,
});

const HomeScreen = () => {

    const [autoplay, setAutoplay] = useState(true)
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const init = async () => {
        const auto = await AsyncStorage.getItem('@AUTO')
        if (auto == null) {
            setAutoPlayProcess(true)
        } else {
            setAutoPlayProcess(JSON.parse(auto))
        }

    }

    useEffect(() => {
        init()

        exitIntersitial.load()

        const backAction = () => {

            ToastAndroid.show("Press again to exit", ToastAndroid.SHORT)
            const backHandler2 = BackHandler.addEventListener(
                "hardwareBackPress",
                () => {
                    BackHandler.exitApp()
                    return true
                }
            )
            setTimeout(() => {
                backHandler2.remove()
            }, 5000);

            exitIntersitial.loaded && exitIntersitial.show()

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => {
            backHandler.remove();
        };
    }, [])


    const setAutoPlayProcess = (value: boolean) => {
        setAutoplay(value)
        AsyncStorage.setItem('@AUTO', JSON.stringify(value))
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <View style={{ flex: 1 }} >
                <Header
                    value={autoplay}
                    onPress={() => setAutoPlayProcess(!autoplay)}
                    onMenuPress={() => setIsMenuVisible(true)}
                />

                <Body
                    autoPlay={autoplay}
                />
            </View>
            <BottomBannerAds />
            <Modal
                isVisible={isMenuVisible}
                onBackButtonPress={() => setIsMenuVisible(false)}
                onBackdropPress={() => setIsMenuVisible(false)}
                backdropOpacity={0.5}
                backdropTransitionInTiming={0}
                backdropTransitionOutTiming={0}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <Drawer />
            </Modal>
        </View>
    )
}

export default HomeScreen
