import React, { Component } from 'react'
import { logout } from '../components/backend'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class AuthLoadingScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isUserLogin: false
    }
  }
  componentDidMount(){
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userLogin');
    this.props.navigation.navigate(userToken ? 'Home' : 'Auth')
  }

  render(){
    return(
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default AuthLoadingScreen
