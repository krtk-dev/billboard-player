import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

interface HeaderProps {
    value: boolean;
    onPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ value, onPress }) => {
    return (
        <View style={styles.container} >
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
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        zIndex: 99
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})


export default Header
