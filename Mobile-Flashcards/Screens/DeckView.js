/*PURPOSE: this component is responsible for showing a card title
with options to add new questions or start a quiz
*/

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { receiveDecks } from '../actions'
import { getDecks } from '../Utils/Helpers'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import CardView from '../Components/CardView'
import Button from '../Components/Button'
import DeckQuestions from './DeckQuestions'
import DeckQuiz from './DeckQuiz'

class DeckView extends React.Component {

  componentDidMount() {
    getDecks()
    .then(decks => this.props.dispatch(receiveDecks(decks)))
  } /*componentDidMount was added here because this screen would need
  the most recent data held in the store. Apart from this invocation,
  the App only receive a fresh copy of the new data when the Decks.js
  screen is called*/

static navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.title} Card`,
})
/*this is the text shown at the top of this screen, specific to each card
*/
render() {

const { navigate } = this.props.navigation;
const deckTitle = this.props.navigation.state.params.title;
const {decks} = this.props;
const cards = `Deck Total: ${decks[deckTitle].count}`;

    return (
      <View style={styles.defaultFlex}>
        <CardView
          name={deckTitle}
          cards={cards}
        />

        <View style={styles.container}>
          <Button buttonText='Add'
            onPress={() => navigate('DeckQuestions', { title: `${deckTitle}`} )}
          />
          <Button buttonText='Start Quiz'
            onPress={() => navigate('DeckQuiz', { title: `${deckTitle}`} )}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center'
  },
  defaultFlex:{
    flex: 1,
  }
})

function mapStateToProps(state){
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(DeckView)
