import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LocationType } from '../types'


type Props = {
    item: LocationType
}

const LocationItem = ({ item }: Props) => {
    return (
        <View style={[{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, position: 'absolute', bottom: 50, flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 15 }, style.shadowStyle]}>
            <Image style={{ width: 180, aspectRatio: 1, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, }} source={{ uri: item.image }}></Image>
            <View style={{ padding: 10, flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Text>{item.title}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>${item.price}</Text>
                    <Text>{item.rating} ★</Text>
                </View>
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
})

export default LocationItem