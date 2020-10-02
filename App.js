import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Loader from './components/Loader'

/*
React Native의 Geolocation: https://reactnative.dev/docs/geolocation#getcurrentposition
Expo의 Geolocation: https://docs.expo.io/versions/v39.0.0/sdk/location/#locationinstallwebgeolocationpolyfill
이렇게 많은 지원하는 API 중 필요한 것을 npm install 하듯이 설치한다. 
설치: expo install expo-location https://docs.expo.io/versions/v39.0.0/sdk/location/#installation
사용법: https://docs.expo.io/versions/v39.0.0/sdk/location/#usage

*/
import * as Location from 'expo-location'

export default class App extends React.Component {
  //현재 위치정보를 받아와보자.
  getLocation = async () => {
    let location = await Location.getCurrentPositionAsync()
    console.log('location is ', location)
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    return <Loader />
  }
}
