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
import { Alert } from 'react-native'

export default class App extends React.Component {
  //현재 위치정보를 받아와보자.
  state = {
    isLoading: true,
  }
  getLocation = async () => {
    try {
      const permission = await Location.requestPermissionsAsync() //https://docs.expo.io/versions/v39.0.0/sdk/location/#locationrequestpermissionsasync
      console.log('here is permission: ', permission)
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      //Send to API and get weather
      this.setState({ isLoading: false }) //이렇게 setState를 했을 때ㅔ, 41번째 줄에서 null로 되어서 화면에 백지만 나온다. 즉 잘 작동함!
    } catch (error) {
      Alert.alert("can't find your location")
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    const { isLoading } = this.state
    return isLoading ? <Loader /> : null
  }
}
