import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack, router } from 'expo-router'

const HomeScreen = () => {
    return (
        <View>
            <Stack.Screen options={{
                headerTitle : "stack"
            }}/>
            <Text>HomeScreen</Text>
            <Link href="/users/1">Go To User 1</Link>
            <Pressable onPress={() => router.navigate({
                pathname: "/users/[id]",
                params: { id: 2 }
            })}>
                <Text>Go To Users 2</Text>
            </Pressable>

            <Link href={'/airbnb'}>Mape Git</Link>
        </View>
    )
}

export default HomeScreen