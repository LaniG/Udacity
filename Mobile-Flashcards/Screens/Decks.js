/*PURPOSE: this component is the main view of the mobile FLASHCARDS app. It is responsible for displaying all the titles
and associated cards (aka. questions) of each title. The titles are also clickable which will link to the DeckView.js component

TODO: there is an error in this file to debug concerning the connect(Decks)
Error messgae: Actions must be plain objects. Use custom middleware for async actions.
*/

import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { receiveDecks } from '../actions'
import { getDecks } from '../Utils/Helpers'
import CardView from '../Components/CardView'
import DeckView from './DeckView'
import { connect } from 'react-redux'

class Decks extends Component {

  componentDidMount() {
    getDecks()
    .then(decks => this.props.dispatch(receiveDecks(decks)))
  }

  returnDeckData=() => {
    return Object.values(this.props.decks)
  }



  render() {

    const { navigate } = this.props.navigation;
    const getDeckData = this.returnDeckData()

    cardCount=(itemQuestions) => {
      if (typeof itemQuestions[0] !== undefined || itemQuestions[0] !== null){

          if(itemQuestions.length > 1 ){
            return `${itemQuestions.length} Cards`
          }
          else if(itemQuestions.length === 1){
            return `${itemQuestions.length} Card`
          }
      else{
        return '0 Cards';
      }
    }

    return (
      <FlatList
          style={{flex: 1}}
          data={getDeckData}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigate('DeckView', { title: item.title, name: item.title, cards: cardCount(item.questions) })}>
              <CardView name={item.title} cards={cardCount(item.questions)} />
            </TouchableOpacity>
          )}
      />
    )
  }
}


function mapStateToProps(state) {
  return {
    decks: state,
  }
}


export default connect(mapStateToProps)(Decks);
