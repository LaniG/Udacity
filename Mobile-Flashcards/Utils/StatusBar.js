import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

export function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
/*This UdaciStatusBar function is responsible for displaying a custom status bar above our App */
