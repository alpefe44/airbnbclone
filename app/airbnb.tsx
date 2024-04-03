import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Stack } from 'expo-router'

import locations from '../assets/data/apartments.json'
import LocationItem from '../src/component/LocationItem'
import { LocationType } from '../src/types'

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

const AirbnbScreen = () => {

    const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null)
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });


    const snapPoints = useMemo(() => [50, '25%', '50%'], [])


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
                        >
                            <View style={{ backgroundColor: 'white', padding: 3, borderWidth: 1, borderColor: 'gray', borderRadius: 16 }}>
                                <Text>{item.price}$</Text>
                            </View>

                        </Marker>
                    )
                }
            </MapView>

            {
                selectedLocation && <LocationItem item={selectedLocation}></LocationItem>
            }

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet>

        </View>
    )
}



const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})

export default AirbnbScreen