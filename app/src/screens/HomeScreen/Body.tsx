import React, { useState, useEffect, useRef } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import HomeScreenCard from '../../components/Card/HomeScreenCard'
import ErrorScreen from './ErrorScreen'
import getHot100, { Hot100 } from './getHot100'
import functions from '@react-native-firebase/functions';
import { YOUTUBEAPIKEY } from '../../../secret'
import YouTube from 'react-native-youtube';
import { WIDTH } from '../../components/style'

interface BodyProps {
    autoPlay: boolean;
}
const vidios = ['uLHqpjW3aDs', 'oygrmJFKYZY', 'l0U7SxXHkPY']

const Body: React.FC<BodyProps> = ({ autoPlay }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Hot100[]>([])
    const [error, setError] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const flatListRef = useRef<FlatList<Hot100>>(null)
    const youtubeRef = useRef<Youtube>(null)

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

    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < data.length) {
            flatListRef.current?.scrollToIndex({
                animated: true,
                index: currentIndex
            })
        }

    }, [currentIndex])


    const nextSong = () => {
        if (autoPlay) {
            if (currentIndex >= 0 && currentIndex < data.length) {
                if (currentIndex == data.length - 1) {
                    setCurrentIndex(0)
                } else {
                    setCurrentIndex(currentIndex + 1)
                }
            }
        } else {
            setCurrentIndex(-1)
        }

    }

    return (
        <>
            {loading ?
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} ><ActivityIndicator /></View>
                :
                error ?
                    <ErrorScreen onPress={init} />
                    :
                    <>
                        {currentIndex >= 0 && currentIndex < data.length &&
                            <YouTube
                                ref={youtubeRef}
                                videoId={vidios[currentIndex] != null ? vidios[currentIndex] : 'error'} // The YouTube video ID
                                play
                                apiKey={YOUTUBEAPIKEY}
                                onChangeState={(e: any) => {
                                    if (e.state == 'ended') {
                                        nextSong()
                                    }
                                }}
                                onError={(e: any) => {
                                    console.log(e.error)
                                    if (e.error == 'NOT_PLAYABLE' || e.error == 'UNKNOWN') {
                                        nextSong()
                                    }
                                }}
                                style={{ width: '100%', height: WIDTH * 9 / 16 }}
                            />
                        }
                        <FlatList
                            ref={flatListRef}
                            data={data}
                            renderItem={({ item, index }) =>
                                <HomeScreenCard
                                    {...item}
                                    number={index + 1}
                                    playing={index == currentIndex}
                                    onPress={() => setCurrentIndex(index)}
                                />
                            }
                            keyExtractor={(_, index) => index.toString()}
                            ListFooterComponent={<View style={{ height: 100 }} />}
                        />
                    </>
            }
        </>
    )
}

export default Body
