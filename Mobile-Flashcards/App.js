import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { Constants } from 'expo'
import { blue } from './Utils/Colors'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './Screens/Decks'
import DeckView from './Screens/DeckView'
import DeckNew from './Screens/DeckNew'
import DeckQuestions from './Screens/DeckQuestions'
import DeckQuiz from './Screens/DeckQuiz'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { white, purple } from './Utils/Colors'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
/*This UdaciStatusBar function is responsible for displaying a custom status bar above our App */

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
/*This TABS function is responsible for creating the Tabbed laout of the App which essentially has 2 views: Decks.js and DeckNew.js */

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
  DeckQuiz:{
    screen: DeckQuiz,
  },
  //TODO:add other screen here to add new deck section
})
/*This MainScreen function is responsible for creating a StackNavigator that will allow users to access different screens in the App
with an arrow button to go back to the previous screen they were on. This function has a record of all screens in our App and which File they will display*/

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainScreen />
        </View>
      </Provider>
      /*My Mobile FLASHCARDS app is using redux! */
    )
  }
}
