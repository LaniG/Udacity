/*PURPOSE: this component is the main view of the mobile FLASHCARDS app. It is responsible for displaying all the titles
and associated cards (aka. questions) of each title. The titles are also clickable which will link to the DeckView.js component

TODO: there is an error in this file to debug concerning the connect(Decks)
Error messgae: Actions must be plain objects. Use custom middleware for async actions.
*/

import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { receiveDecks } from '../actions'
import CardView from '../Components/CardView'
import DeckView from './DeckView'
import { connect } from 'react-redux'

class Decks extends Component {

  componentDidMount() {
    this.props.getDecks();
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <FlatList
          style={{flex: 1}}
          data={this.props.decks}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigate('DeckView', { title: item.title, name: item.title, cards: item.questions.length })}>
              <CardView name={item.title} cards={item.questions.length} />
            </TouchableOpacity>
          )}
      />
    )
  }
}


function mapStateToProps(data) {
  return {
    decks: Object.keys(data).reduce((decks, id) => {
      return decks.concat(data[id])
    }, [])
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getDecks: () => dispatch(receiveDecks())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Decks);
