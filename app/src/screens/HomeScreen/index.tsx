import React, { useState, useEffect, } from 'react'
import { View, AsyncStorage } from 'react-native'
import Header from './Header'
import Body from './Body'

const HomeScreen = () => {

    const [autoplay, setAutoplay] = useState(true)

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
        <View style={{ flex: 1 }} >
            <Header
                value={autoplay}
                onPress={() => setAutoPlayProcess(!autoplay)}
            />

            <Body
                autoPlay={autoplay}
            />
        </View>
    )
}

export default HomeScreen
