import { View, Text, StyleSheet, Pressable, FlatList, ViewStyle } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Stack } from 'expo-router'

import locations from '../assets/data/apartments.json'
import LocationItem from '../src/component/LocationItem'
import { LocationType } from '../src/types'

import BottomSheet, { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet'
import ApartmentListItem from '../src/component/ApartmentListItem'

const AirbnbScreen = () => {

    const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null)
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });


    const snapPoints = useMemo(() => [50, '90%'], [])

    const style: ViewStyle = {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'absolute',
        bottom: 70,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 15
    }

    const styleBottomSheet: ViewStyle = {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 15
    }

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen options={{ headerShown: false }} />
            <MapView region={mapRegion} style={styles.map}>
                {
                    locations.map((item) =>
                        <ApartmentListItem item={item} onPress={setSelectedLocation}></ApartmentListItem>
                    )
                }
            </MapView>

            {
                selectedLocation && <LocationItem containerStyle={style} item={selectedLocation}></LocationItem>
            }

            <BottomSheet index={0} snapPoints={snapPoints} >
                <View style={{ flex: 1 }}>
                    <Text style={styles.listTitle}>Over {locations.length} places</Text>
                    <BottomSheetFlatList
                        data={locations}
                        contentContainerStyle={{ gap: 10, padding: 10 }}
                        renderItem={({ item }) => <LocationItem containerStyle={styleBottomSheet} item={item} />}
                    />
                </View>
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
    listTitle: {
        textAlign: 'center',
        fontFamily: 'InterSemi',
        fontSize: 16,

    },
})

export default AirbnbScreen