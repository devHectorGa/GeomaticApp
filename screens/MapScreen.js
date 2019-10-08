import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg'

export default function MapScreen(){
  return(
    <View style={
      { alignItems:"center", justifyContent: "center", flex: 1 }
    }>
      <SvgUri width="100%" height="100%" 
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      />
      {/* <Svg height="200" width="200" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </Svg> */}
      {/* <Text>Hola</Text> */}
    </View>
  )
}

MapScreen.navigationOptions = {
  header: null,
}