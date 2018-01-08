/*PURPOSE: this component is responsible for taking all the titles and quesitons form the store and map over them as a quiz
*/

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../Components/Button'
import { white } from '../Utils/Colors'

export default class DeckQuiz extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  })
  /*this is the text shown at the top of this screen, specific to each card
  */

  render(){
    return(
      <View style={{flex: 1}}>
        <Text>1/2</Text>

        <View style={styles.TopSection}>
          <Text style={{flex: 1, marginTop:10}}>Question: </Text>
          <Text style={{flex: 4, fontSize:20, textAlign: 'center',}}> What is React Native?</Text>
        </View>
        <View style={[styles.TopSection, {flex: 2}]}>
          <Text style={{flex: 1, marginTop:10}}>Answer: </Text>
          <Text style={{flex: 4, fontSize:20, textAlign: 'center',}}> A React Native app is a real mobile app. With React Native, you don't build a "mobile web app", an "HTML5 app", or a "hybrid app". You build a real mobile app that's indistinguishable from an app built using Objective-C or Java.</Text>
          <View style={[styles.scoreButtons, {flex: 2}]}>
            <Button buttonText='Correct' />
            <Button buttonText='inCorrect' />
          </View>
          <Text style={{flex: 1}}>Correct: 1/2</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TopSection: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: white,
    height: 200,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { Width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  scoreButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

})
