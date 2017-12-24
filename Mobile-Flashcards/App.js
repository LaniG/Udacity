import React from 'react'
import { View, StatusBar } from 'react-native'
import { blue } from './Utils/Colors'
import Decks from './Components/Decks'
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
        <Decks />
      </View>
    );
  }
}
