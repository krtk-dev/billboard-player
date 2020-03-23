import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'

interface ErrorScreenProps {
    onPress: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ onPress }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <TouchableWithoutFeedback
                onPress={onPress}
            >
                <View style={{ alignItems: 'center' }} >
                    <Text>Error</Text>
                    <Text>Reload</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default ErrorScreen
