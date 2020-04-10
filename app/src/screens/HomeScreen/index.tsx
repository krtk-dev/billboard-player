import React, { useState, useEffect, useRef, } from 'react'
import { View, AsyncStorage, Text } from 'react-native'
import Header from './Header'
import Body from './Body'
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { WIDTH } from '../../components/style';
import Drawer from './Drawer';

const HomeScreen = () => {

    const [autoplay, setAutoplay] = useState(true)
    const drawerRef = useRef<DrawerLayout>(null)

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
            <DrawerLayout
                ref={drawerRef}
                drawerWidth={WIDTH - 100}
                drawerType='front'
                drawerBackgroundColor="#ddd"
                renderNavigationView={() => <Drawer />}>
                <View style={{ flex: 1 }} >
                    <Header
                        value={autoplay}
                        onPress={() => setAutoPlayProcess(!autoplay)}
                        onMenuPress={() => drawerRef.current?.openDrawer()}
                    />

                    <Body
                        autoPlay={autoplay}
                    />
                </View>
            </DrawerLayout>
        </View>
    )
}

export default HomeScreen
