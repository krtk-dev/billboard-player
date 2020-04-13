import React, { useState, useEffect, useRef, } from 'react'
import { View, AsyncStorage, Text } from 'react-native'
import Header from './Header'
import Body from './Body'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { WIDTH } from '../../components/style';
import Drawer from './Drawer';
import Modal from 'react-native-modal';
import BottomBannerAds from '../../components/View/BottomBannerAds';

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
