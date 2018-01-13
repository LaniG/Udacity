/*PURPOSE: this component is responsible for taking all the titles and quesitons form the store and map over them as a quiz
*/

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Button from '../Components/Button'
import { white } from '../Utils/Colors'

class DeckQuiz extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title} Quiz`,
  })
  /*this is the text shown at the top of this screen, specific to each card
  */

  state = {
    showAnswer: false,
    currentQuestion: 0,
    score: 0,
  }

  isCorrect = () => {
      const {currentQuestion, score} = this.state;
      this.setState({currentQuestion: currentQuestion + 1, score: score + 1, showAnswer: false});
  }
  isWrong = () => {
      this.setState({currentQuestion: this.state.currentQuestion + 1});
  }
  showQuizAnswer = () => {
      this.setState({showAnswer: !this.state.showAnswer});
  }

  startQuiz = () => {
      this.setState({currentQuestion: 0, score: 0, showAnswer: false});
  }
  backToDeck = () => {
      this.props.navigation.goBack();
  }

  render() {
    const { navigate } = this.props.navigation;
    const {currentQuestion, score, showAnswer} = this.state;
    const deckTitle = this.props.navigation.state.params.title;
    const {decks} = this.props;
    const questions = decks[deckTitle].questions;
    const quizLength = decks[deckTitle].count;
    const progress = currentQuestion + 1;
    const quizValidation = currentQuestion < quizLength;
    console.log(quizValidation);


    return (
      <View style={{flex: 1}}>

        {quizValidation ? ( /*A test to see if we should display quiz questions*/
          <View style={{flex: 2}}>
            {showAnswer ? (
              <View style={[styles.TopSection,{flex:3}]}>
                <Text style={styles.quizText}>{questions[currentQuestion].answer}</Text>
                <View style={styles.scoreButtons}>
                  <Button buttonText='Question' onPress={this.showQuizAnswer}/>
                </View>
              </View>
            ):(
              <View style={[styles.TopSection,{flex:3}]}>
                <Text style={styles.quizText}>{questions[currentQuestion].question}</Text>
                <View style={[styles.scoreButtons, {flex: 1}]}>
                  <Button buttonText='Answer' onPress={this.showQuizAnswer}/>
                </View>
              </View>
            )}

            <View style={[styles.TopSection,{flex:1}]}>
              <View style={styles.scoreButtons}>
                <Button buttonText='Correct' onPress={this.isCorrect}/>
                <Button buttonText='inCorrect' onPress={this.isWrong}/>
              </View>
              <Text style={{flex: 1}}>Correct: {this.state.score}/{quizLength} | Progress: {progress} of {quizLength}</Text>
            </View>

          </View>
        ):(
          <View style={[styles.TopSection,{flex:3}]}>
            <Text style={styles.quizText}>Your Quiz Score is</Text>
            <Text style={styles.quizText}>{this.state.score}/{quizLength}</Text>
            <View style={[styles.scoreButtons, {flex: 1}]}>
              <Button buttonText='Re-Do' onPress={() => navigate('DeckQuiz', { title: `${deckTitle}`} )}/>
              <Button buttonText='Done' onPress={() => navigate('Home')}/>
            </View>
          </View>
        )}

      </View>
    )/*end of return*/
  }/*end of render*/
}/*end deckQuiz*/

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
  quizText: {
    flex:1,
    fontSize:30,
    marginTop:50,
  }

})

function mapStateToProps(state){
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckQuiz)
