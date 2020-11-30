import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

interface HeaderProps {
    value: boolean;
    onPress: () => void;
    onMenuPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ value, onPress, onMenuPress }) => {
    return (
        <View style={styles.container} >
            <TouchableWithoutFeedback
                onPress={onMenuPress}
            >
                <View style={styles.left}  >
                    <IconM name='menu' color='#555' size={24} />
                </View>
            </TouchableWithoutFeedback>
            <Text>HOT 100</Text>
            <TouchableWithoutFeedback
                onPress={onPress}
            >
                <View style={styles.right}  >
                    <Text style={{ marginRight: 8 }} >Auto play</Text>
                    <Icon name={value ? 'toggle-on' : 'toggle-off'} color='#555' size={20} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        zIndex: 99
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 24
    },
    left: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginRight: 8
    }
})


export default Header
