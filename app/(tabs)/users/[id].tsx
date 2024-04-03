import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack, Tabs, useLocalSearchParams } from 'expo-router'

const UserPage = () => {

    const { id } = useLocalSearchParams<{ id: string }>()

    return (
        <View>
            <Stack.Screen
                options={{
                    title: "params",
                    
                }}
            />
            <Text>{id}. User</Text>
        </View>
    )
}

export default UserPage