import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CardView from './CardView'

export default class Decks extends Component {
  render() {
  return (
  <ScrollView style={{flex: 1}}>
    <CardView />
    <CardView />
    <CardView />
    <CardView />
  </ScrollView>
)}
}
