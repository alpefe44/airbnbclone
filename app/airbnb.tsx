import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Stack } from 'expo-router'

import locations from '../assets/data/apartments.json'
import LocationItem from '../src/component/LocationItem'

const AirbnbScreen = () => {

    const [selectedLocation, setSelectedLocation] = useState(null)

    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });



    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: false }} />
            <MapView region={mapRegion} style={styles.map}>
                {
                    locations.map((item) =>
                        <Marker
                            onPress={() => setSelectedLocation(item)}
                            title={item.title}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude
                            }}
                        ></Marker>
                    )
                }
            </MapView>

            {
                selectedLocation && <LocationItem item={selectedLocation}></LocationItem>
            }
        </View>
    )
}



const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
})

export default AirbnbScreen