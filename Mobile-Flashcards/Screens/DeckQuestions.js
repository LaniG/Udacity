/*PURPOSE: this component is responsible for taking
the questions and answers for the App.

TODO: implement redux to manage this Q&A state as well as the Titlte
state in DeckNew.js
*/

import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Button from '../Components/Button'
import { white } from '../Utils/Colors'

export default class DeckQuestions extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Add Questions to ${navigation.state.params.title}`,
  })
  /*this is the text shown at the top of this screen, specific to each card
  */

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
  }


  render() {

    const { navigate } = this.props.navigation;

    return(
      <View style={{flex: 1}}>
        <View style={styles.TopSection}>
          <Text style={styles.TextStyle}> Question </Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Question here"
            onChangeText={(question) => this.setState({question})}
            />

            <Text style={styles.TextStyle}> Answer </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Answer here"
              onChangeText={(answer) => this.setState({answer})}
              />
        </View>
        <Button buttonText='More' />
        <Button buttonText='Done'
          onPress={() => navigate('Home')}
        />
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
  TextStyle: {
    fontSize: 30,
    textAlign: 'center',
  },
  TextInput: {
    fontSize: 20,
    height: 60,
    width: 300,
    textAlign: 'center'
  }
})
