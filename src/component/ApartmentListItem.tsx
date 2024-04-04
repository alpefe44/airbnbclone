import { View, Text } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
import { LocationType } from '../types'

type Props = {
    item: LocationType,
    onPress?: any
}


const ApartmentListItem = ({ item, onPress }: Props) => {
    return (
        <Marker
            onPress={() => onPress(item)}
            title={item.title}
            coordinate={{
                latitude: item.latitude,
                longitude: item.longitude
            }}
        >
            <View style={{ backgroundColor: 'white', padding: 3, borderWidth: 1, borderColor: 'gray', borderRadius: 16 }}>
                <Text>{item.price}$</Text>
            </View>

        </Marker>
    )
}

export default ApartmentListItem