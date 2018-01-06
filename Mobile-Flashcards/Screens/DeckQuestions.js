/*PURPOSE: this component is responsible for taking
the questions and answers for each Deck title and updating the Store

TODO: lines 46-53: these IF statements are being overlooked. These need to
run first before the confirmation alert.
*/

import React from 'react'
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import Button from '../Components/Button'
import { white } from '../Utils/Colors'
import { addTitle, addQuestions } from '../actions'
import { saveDeckTitle, addCardToDeck } from '../Utils/Helpers'

class DeckQuestions extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `Add Questions to ${navigation.state.params.title}`,
  })
  /*this is the text shown at the top of this screen, specific to each card
  */

  componentWillMount(){
    this.setState({
        question:'',
        answer:''
  })}

  submitQuestion = () => {
    const { navigate } = this.props.navigation;
    const deckTitle = this.props.navigation.state.params.title;
    const newTitle = {title: deckTitle, questions: []};
    const questions = [];
    const { question, answer } = this.state;
    const params = { deckTitle, questions, question, answer };
    const card = { questions, question, answer };

  if (question === ''){
      Alert.alert('Going too fast!','Please remember to add a question');
      return;
    }
    if (answer === ''){
      Alert.alert('Slow down!','Please remember to add the answer');
      return;
    }


    this.props.dispatch(addTitle(newTitle));
    saveDeckTitle(newTitle);
    this.props.dispatch(addQuestions(params));
    addCardToDeck(newTitle, card);


    Alert.alert('Great News',`Your new question was added to the Deck: ${deckTitle}`,
      [
        {text: 'OK', onPress: () => navigate('Home')}
      ])

  }

  render() {


    return(
      <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
        <View style={styles.TopSection}>
          <Text style={styles.TextStyle}> Question </Text>
          <TextInput
            style={styles.TextInput}
            value={this.state.question} /*It is necessary to get the value of question directly from this.state*/
            placeholder="Question here"
            onChangeText={question => this.setState({question})}
            /*the onChange prop passed to setState was causing my program to crash
            NB: when sending onChange props, omit the brackets (question) as I had it before */
            />

            <Text style={styles.TextStyle}> Answer </Text>
            <TextInput
              style={styles.TextInput}
              value={this.state.answer}
              placeholder="Answer here"
              onChangeText={answer => this.setState({answer})}
              />
        </View>
        <Button buttonText='Done'
        onPress={() => {
          this.submitQuestion()
        }}
        />
      </KeyboardAvoidingView>
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

function mapStateToProps(state){
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckQuestions)
