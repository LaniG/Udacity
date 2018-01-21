/*PURPOSE: this component is the main view of the mobile FLASHCARDS app. It is responsible for displaying all the titles
and associated cards (aka. questions) of each title. The titles are also clickable which will link to the DeckView.js component
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
    const getDeckData = this.returnDeckData();

    //console.log(this.props.decks);

    cardCount = (itemCount) => {

          if (itemCount === 0 || itemCount > 1 ) {
            return `${itemCount} Cards`
          }
          else {
            return `${itemCount} Card`
          }
    }

    return (
      <FlatList
          style={{flex: 1}}
          data={getDeckData}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigate('DeckView', { title: item.title })}>
              <CardView name={item.title} cards={cardCount(item.count)} />
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
