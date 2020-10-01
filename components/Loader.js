import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grace's</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.text}>Weather App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 100,
    paddingVertical: 100,
    backgroundColor: '#80deea',
  },
  text: {
    color: '#212121',
    fontSize: 30,
  },
})
