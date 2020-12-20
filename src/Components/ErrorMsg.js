import React from 'react';
import { View, Text } from 'react-native';

export default ({ msg }) => {
    return(
        <View style={{ width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#B73427', fontFamily: 'BlissPro-Bold'}}>{msg}</Text>
        </View>
    )
}