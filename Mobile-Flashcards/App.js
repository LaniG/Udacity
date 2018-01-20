import React from 'react'
import { View, StyleSheet } from 'react-native'
import { UdaciStatusBar } from './Utils/StatusBar'
import { MainScreen } from './Utils/Navigator'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { blue } from './Utils/Colors'

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
