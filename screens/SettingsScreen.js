import React from 'react';
import {
  AsyncStorage,
  Button,
  View,
} from 'react-native';
import { logout } from '../components/backend'
import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen(...props) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  _logout = async () => {
    // logout()
    await AsyncStorage.clear()
    props.navigation.navigate('Auth')
  }
  return (
    <View>
      {/* <ExpoConfigView />; */}
      <Button
        title="Cerrar Sesion"
        onPress={this._logout}
      />
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Configuracion',
};
