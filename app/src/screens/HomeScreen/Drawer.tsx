import React from 'react'
import { StyleSheet, Text, View, FlatList, Linking, Share } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.koreanthinker.billboard'
const FACEBOOK = 'https://www.facebook.com/KoreanThinker-408391183302145'
const INSTAGRAM = 'https://www.instagram.com/dev_hyun/?hl=ko'

const Drawer = () => {

    const drawerItems = [
        {
            icon: <Icon name='star' size={20} />,
            text: 'RATE',
            onPress: () => Linking.openURL(PLAY_STORE)
        },
        {
            icon: <Icon name='share' size={20} />,
            text: 'SHARE',
            onPress: () => Share.share({ message: 'Billboard Player - ' + PLAY_STORE })
        },
        {
            icon: <Icon name='facebook' size={20} />,
            text: 'FACEBOOK',
            onPress: () => Linking.openURL(FACEBOOK)
        },
        {
            icon: <Icon name='instagram' size={20} />,
            text: 'INSTAGRAM',
            onPress: () => Linking.openURL(INSTAGRAM)
        }
    ]
    return (
        <View style={styles.container} >
            <FlatList
                data={drawerItems}
                renderItem={({ item }) => <BaseButton
                    onPress={item.onPress}
                    style={styles.btn} >
                    <View style={styles.icon} >
                        {item.icon}
                    </View>
                    <Text >{item.text}</Text>
                </BaseButton>}
            />

        </View>
    )
}

export default Drawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    btn: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: 50,
        alignItems: 'center'
    }
})
