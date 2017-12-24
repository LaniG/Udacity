import React from 'react';
import { View, Text } from 'react-native';
import CardView from './CardView'

const Decks = (props) => {
  return (
  <View style={{flex: 1}}>
    <CardView />
    <CardView />
    <CardView />
    <CardView />
  </View>
)
}


export default Decks;
