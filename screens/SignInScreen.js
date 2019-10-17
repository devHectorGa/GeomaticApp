import React, { Component } from 'react'
import {
  AsyncStorage,
  Button,
  Text,
  TextInput,
  StyleSheet,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors';

class SignInScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Inicia Sesión</Text>
        <View>
          <Text>Correo Electronico:</Text>
          <TextInput
            textContentType="emailAddress"
            style={styles.textInput}
            placeholder="Digite su correo"
            placeholderTextColor={Colors.}
          />
        </View>
        <View>
          <Text>Contraseña</Text>
          <TextInput
            placeholder="Digite su contraseña"
            placeholderTextColor="#FFF"
            secureTextEntry={true}
            style={styles.textInput}
            textContentType="password"
          />
          <Button title="Inicia Sesión!" onPress={this._signInAsync} />
        </View>
      </View>
    )
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userLogin', true)
    this.props.navigation.navigate('Main')
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    width: "100%"
  },
  title: {
    fontSize: 30,
    color: "#2e78b7"
  },
  textInput: {
    backgroundColor:"#ccc",
    borderRadius: 50,
    color: "#2e78b7",
    fontSize: 19,
    margin: 3,
    paddingHorizontal: 10,
    width: 250,
  }
})

export default SignInScreen