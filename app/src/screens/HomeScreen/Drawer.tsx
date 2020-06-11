import React from 'react'
import { StyleSheet, Text, View, FlatList, Linking, Share, TouchableWithoutFeedback, Animated } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.koreanthinker.billboard'
const FACEBOOK = 'https://www.facebook.com/KoreanThinker-408391183302145'
const INSTAGRAM = 'https://www.instagram.com/dev_hyun'

interface DrawerProps {
    onClose: () => void;
    animation: Animated.Value;
}

const Drawer: React.FC<DrawerProps> = ({ onClose, animation }) => {

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
        },
        {
            icon: <Icon name='close' size={20} />,
            text: 'CLOSE',
            onPress: () => onClose()
        }
    ]
    return (
        <View style={styles.container} >
            <FlatList
                data={drawerItems}
                renderItem={({ item, index }) =>
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={item.onPress}

                    >
                        <BaseButton
                            style={styles.btn}
                        >
                            <View style={styles.icon} >
                                {item.icon}
                            </View>
                            <Text >{item.text}</Text>

                        </BaseButton>
                    </TouchableWithoutFeedback>
                }
            />

        </View>
    )
}

export default Drawer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        elevation: 10
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
