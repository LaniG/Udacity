import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { purple, white } from '../Utils/Colors'


const Button = (props) => {
    return (
          <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.btnText}>{props.buttonText}</Text>
          </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 5,
    width:120,
    margin: 20,
  },
  btnText :{
    color: white,
    fontSize: 20,
    alignSelf: 'center',
  },
})

export default Button;
