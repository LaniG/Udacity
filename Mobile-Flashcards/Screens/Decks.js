/*PURPOSE: this component is the main view of the mobile FLASHCARDS app. It is responsible for displaying all the titles
and associated cards (aka. questions) of each title. The titles are also clickable which will link to the DeckView.js component

TODO: After I create the list of Decks to be added to the Store,
I need to return here to:
- used mapStateToProps to access each deck (aka. title) to be displayed in the ScrollView.
*/

import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import CardView from '../Components/CardView'
import DeckView from './DeckView'
import { connect } from 'react-redux'

class Decks extends Component {

  state = {
    cardDecks: {},
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={{flex: 1}}>

        <TouchableOpacity onPress={() => navigate('DeckView', { title: 'React', name: 'React', cards: 25 })}>
          <CardView name='React' cards={25} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('DeckView', { title: 'Redux', name: 'Redux', cards: 30 })}>
          <CardView name='Redux' cards={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('DeckView', { title: 'Flexbox', name: 'Flexbox', cards: 10 })}>
          <CardView name='Flexbox' cards={10} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('DeckView', { title: 'React-Native', name: 'React-native', cards: 40 })}>
          <CardView name='React-Native' cards={40} />
        </TouchableOpacity>

      </ScrollView>
    )
  }
}


function mapStateToProps({decks}) {
  return {

  }
}


export default connect(mapStateToProps)(Decks)
