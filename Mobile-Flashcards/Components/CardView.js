import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { white } from '../Utils/Colors'

const CardView = () => {
  return(
    <View style={styles.cardItem}>
      <Text style={styles.cardHeader}> React </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    borderWidth: 2,
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
    fontSize: 30,
  }
})

export default CardView;
