/*PURPOSE: this component is responsible for rendering
most of the cards used in the App

*/

import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { white, purple } from '../Utils/Colors'


const CardView = (props) => {

  return(
    <View style={styles.cardItem}>
      <Text style={styles.cardHeader}>{props.name} </Text>
      <Text style={styles.cardNumber}>{props.cards} Cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    flex:1,
    justifyContent: 'center',
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
  cardHeader: {
    fontSize: 40,
  },
  cardNumber:{
    fontSize:20,
  },
})

export default CardView;
