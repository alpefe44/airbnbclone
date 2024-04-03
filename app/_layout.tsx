import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootLayout = () => {
  return (
    <GestureHandlerRootView style = {{flex : 1}}>
      <Stack />
    </GestureHandlerRootView>
  )
}

export default RootLayout