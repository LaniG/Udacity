import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { Constants } from 'expo'
import { blue } from './Utils/Colors'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './Screens/Decks'
import DeckView from './Screens/DeckView'
import DeckNew from './Screens/DeckNew'
import DeckQuestions from './Screens/DeckQuestions'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
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
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
    },
  },
  New: {
    screen: DeckNew,
    navigatorOptions: {
      tabBarLabel: 'New',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-circle-outline' size={30} color={tintColor} />
    }
  }
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
  DeckNew: {
    screen: DeckNew,
  },
  DeckView: {
    screen: DeckView,
  },
  DeckQuestions: {
    screen: DeckQuestions,
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
