import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
    <Stack.Screen name="index" options={{ title: "Clients" }} />
    <Stack.Screen name="[clientId]" options={{ title: "Client Details" }} />
  </Stack>
  )
}

export default _layout