import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Loader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grace's</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:
            'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclfoiG%2FbtqGbpLKhJc%2FupU52EiBlYUo2pj8LAV8c1%2Fimg.png',
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
  tinyLogo: {},
})
