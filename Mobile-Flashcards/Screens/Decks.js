/*TODO:make a link on each card rendered to go to the DeckView screen,
passing the name and card number props

PURPOSE: this component will display all Decks in the App
*/

import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import CardView from '../Components/CardView'
import DeckView from './DeckView'

export default class Decks extends Component {
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
