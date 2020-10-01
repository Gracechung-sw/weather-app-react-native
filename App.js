import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowContainer}></View>
      <View style={styles.blueContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  blueContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
})
