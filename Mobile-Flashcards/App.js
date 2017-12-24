import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { Constants } from 'expo'
import { blue } from './Utils/Colors'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './Components/Decks'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white, purple } from './Utils/Colors'


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigatorOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tinColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
    },
  },
  //TODO: add new screen here to add new deck section
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainScreen = StackNavigator({
  Home: {
    screen: Tabs,
  },
  //TODO:add other screen here to add new deck section
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
        <MainScreen />
      </View>
    );
  }
}
