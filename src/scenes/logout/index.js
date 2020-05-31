import React from 'react'
import { View, Text } from 'react-native'

const logout = (props) => {
    return (
        <View>
            {props.navigation.navigate('Welcome')}
        </View>
    )
}

export default logout
