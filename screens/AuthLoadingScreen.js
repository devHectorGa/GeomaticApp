import React, { Component, useState } from 'react'
import { firebaseAuth } from '../components/backend'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

const [isUserLogin, setUserLogin] = useState(false)

class AuthLoadingScreen extends Components {
  constructor(props){
    super(props)
    this.state = {
      isUserLogin: false
    }
  }
  componentDidMount(){
    this.removeListenerAuth = firebaseAuth().onAuthStateChanged( user =>{
      setUserLogin(user)
      this.setState({ isUserLogin: user })
    })
  }

  componentWillUnmount(){
    this.removeListenerAuth();
  }

  _bootstrapAsync = async () => {    
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render(){
    if(this.state.isUserLogin){
      return(
        <View>
          <Text>Esta logueado</Text>
        </View>
      )
    }else{
      return(
        <View>
          <Text>No esta logueado</Text>
        </View>
      )
    }
  }

}
