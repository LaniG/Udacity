import React from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white, purple } from '../Utils/Colors'

const CardView = () => {
  return(
    <TouchableOpacity style={styles.cardItem}>
      <Text style={styles.cardHeader}> React </Text>
      <Text style={styles.cardNumber}>10 Cards</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 50,
  },
  cardNumber:{
    fontSize:20,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonText :{
    color: white,
    fontSize: 20,
  }
})

export default CardView;
