import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'


export interface HomeScreenCardProps {
    title: string;
    singer: string;
    image: string;
    number: number;
    playing: boolean;
    onPress: () => void;
}

const HomeScreenCard: React.FC<HomeScreenCardProps> = ({ title, singer, image, number, playing, onPress }) => {

    return (
        <BaseButton
            onPress={onPress}
            style={[styles.container, { backgroundColor: playing ? '#ddd' : '#fff' }]}
        >
            <View style={styles.numberContainer} >
                <Text style={{ fontSize: 20 }} >{number}</Text>
            </View>
            <View style={styles.descriptionConainer} >
                <Text style={{ fontSize: 18 }} >{title}</Text>
                <Text>{singer}</Text>
            </View>
            {image != '' && <Image
                style={styles.imageContainer}
                source={{ uri: image }}
                resizeMode='cover'
            />}
        </BaseButton>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 76,
        flexDirection: 'row',
    },
    numberContainer: {
        width: 68,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionConainer: {
        height: '100%',
        justifyContent: 'center'
    },
    imageContainer: {
        height: '100%',
        width: 68,
        position: 'absolute',
        right: 0
    }
})


export default HomeScreenCard
