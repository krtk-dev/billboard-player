import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import HomeScreenCard, { HomeScreenCardProps } from '../../components/Card/HomeScreenCard'


interface BodyProps {
    autoPlay: boolean;
    data: HomeScreenCardProps[];
    loading: boolean
}

const Body: React.FC<BodyProps> = ({ autoPlay, data, loading }) => {
    return (
        loading ?
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} ><ActivityIndicator /></View>
            :
            <FlatList
                data={data}
                renderItem={({ item }) => <HomeScreenCard {...item} autoPlay={autoPlay} />}
                keyExtractor={(_, index) => index.toString()}
            />
    )
}

export default Body
