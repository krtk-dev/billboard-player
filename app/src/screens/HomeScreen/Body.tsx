import React, { useState, useEffect, useRef } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import HomeScreenCard from '../../components/Card/HomeScreenCard'
import ErrorScreen from './ErrorScreen'
import getHot100, { Hot100 } from './getHot100'
import { YOUTUBEAPIKEY } from '../../../secret'
import YouTube from 'react-native-youtube';
import { WIDTH } from '../../components/style'

interface BodyProps {
    autoPlay: boolean;
}

const Body: React.FC<BodyProps> = ({ autoPlay }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<Hot100[]>([])
    const [error, setError] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const flatListRef = useRef<FlatList<Hot100>>(null)
    //@ts-ignore
    const youtubeRef = useRef<Youtube>(null)

    const init = async () => {
        setLoading(true)
        setError(false)
        setCurrentIndex(0)
        try {
            const res = await getHot100({ afterRank: 0 })
            setData(res as Hot100[])
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error)
        }
    }

    useEffect(() => {
        // functions().useFunctionsEmulator('http://localhost:5000');
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

    const getMore = async () => {
        if (data.length >= 100) return
        try {
            const res = await getHot100({ afterRank: data.length })
            const newData = res as Hot100[]
            setData(data.concat(newData))
        } catch (error) {
            console.log('Error: ' + error);
            setError(true)
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
                                videoId={data[currentIndex].youtube != null ? data[currentIndex].youtube : 'error'} // The YouTube video ID
                                play
                                apiKey={YOUTUBEAPIKEY}
                                //@ts-ignore
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
                            keyExtractor={({ singer, title }, index) => singer + title}
                            ListFooterComponent={<View style={{ height: data.length >= 100 ? 100 : 0 }} />}
                            onEndReached={getMore}
                            onEndReachedThreshold={3}
                            refreshing={loading}
                            onRefresh={init}
                        />
                    </>
            }
        </>
    )
}

export default Body
