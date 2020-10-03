// /*
// weather API 사용
// 1. 로그인 후 https://home.openweathermap.org/api_keys 에서 내 api_keys를 받아온다.
// 2. https://openweathermap.org/current 여기서 우리가 사용할 API 문서를 본다. 우리가 사용할 것은 https://openweathermap.org/current#geo
// 3. Examples of API calls: http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}
// 4. 데이터를 받아온는 fetchAPI를 위해 axios를 설치 및 사용할 것이다.

// */

import React from 'react'
import { Alert } from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'
import Loader from './components/Loader'
import Weather from './components/Weather'

const WEATHER_API_KEY = process.env.WEATHER_API_KEY

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`,
    )
    console.log('getWeather data', data)
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    })
  }
  getLocation = async () => {
    try {
      const permission = await Location.requestPermissionsAsync() //https://docs.expo.io/versions/v39.0.0/sdk/location/#locationrequestpermissionsasync
      console.log('here is permission: ', permission)
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync()
      //Send to API and get weather
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false }) //이렇게 setState를 했을 때, 41번째 줄에서 null로 되어서 화면에 백지만 나온다. 즉 잘 작동함!
    } catch (error) {
      Alert.alert("can't find your location")
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    const { isLoading, condition, temp } = this.state
    return isLoading ? <Loader /> : <Weather condition={condition} temp={Math.round(temp)} />
  }
}
