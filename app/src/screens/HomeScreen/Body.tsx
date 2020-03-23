import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import HomeScreenCard from '../../components/Card/HomeScreenCard'
import ErrorScreen from './ErrorScreen'
import getHot100, { Hot100 } from './getHot100'
import functions from '@react-native-firebase/functions';

interface BodyProps {
    autoPlay: boolean;
}

const Body: React.FC<BodyProps> = ({ autoPlay }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Hot100[]>([])
    const [error, setError] = useState(false)

    const init = async () => {
        setLoading(true)
        setError(false)
        try {
            const res = await getHot100()
            setData(res as Hot100[])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }

    useEffect(() => {
        functions().useFunctionsEmulator('http://localhost:5000');
        init()
    }, [])

    return (
        <>
            {loading ?
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} ><ActivityIndicator /></View>
                :
                error ?
                    <ErrorScreen onPress={init} />
                    :
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => <HomeScreenCard {...item} autoPlay={autoPlay} number={index + 1} />}
                        keyExtractor={(_, index) => index.toString()}
                        ListFooterComponent={<View style={{ height: 100 }} />}
                    />
            }
        </>
    )
}

export default Body
