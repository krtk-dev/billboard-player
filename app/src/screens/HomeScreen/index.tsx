import React, { useState, useEffect, } from 'react'
import { View, AsyncStorage } from 'react-native'
import Header from './Header'
import Body from './Body'
import { HomeScreenCardProps } from '../../components/Card/HomeScreenCard'
import BillBoardHot100Crawling from '../../components/BillBoardHot100Crawling'
import ErrorScreen from './ErrorScreen'

const HomeScreen = () => {

    const [autoplay, setAutoplay] = useState(true)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<HomeScreenCardProps[]>([])
    const [error, setError] = useState(true)

    const init = async () => {
        setLoading(true)
        setError(false)
        const auto = await AsyncStorage.getItem('@AUTO')
        if (auto == null) {
            setAutoPlayProcess(true)
        } else {
            setAutoPlayProcess(JSON.parse(auto))
        }

        try {
            const data = await BillBoardHot100Crawling()
            setData(data)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
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
            {error ?
                <ErrorScreen
                    onPress={init}
                />
                :
                <Body
                    autoPlay={autoplay}
                    data={data}
                    loading={loading}
                />
            }

        </View>
    )
}

export default HomeScreen
