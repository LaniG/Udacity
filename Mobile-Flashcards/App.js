import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { MainScreen } from './Utils/Navigator'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { blue } from './Utils/Colors'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
/*This UdaciStatusBar function is responsible for displaying a custom status bar above our App */

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainScreen />
        </View>
      </Provider>
      /*My Mobile FLASHCARDS app is using redux! */
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
  },
})
