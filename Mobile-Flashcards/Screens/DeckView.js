/*TODO: look out for the name and card number props coming in from DeckView.
Also, implement stack Navigation here on the buttons to go
to other relevant screens

PURPOSE: this component will show the individual Deck with
options to either start a quiz or add more questions
*/

import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import CardView from '../Components/CardView'
import Button from '../Components/Button'
import { purple, white } from '../Utils/Colors'


class DeckView extends React.Component {

static navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.title} Card`,
})
/*this is the text shown at the top of this screen, specific to each card
*/
render() {
const { params } = this.props.navigation.state;

    return (
      <View style={{flex: 1}}>
        <CardView
          name={params.name}
          cards={params.cards} /*these are not pulling over...*/
        />

        <View style={styles.container}>
          <Button buttonText='Add' />
          <Button buttonText='Start' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 5,
    width:120,
    margin: 20,
  },
  buttonText :{
    color: white,
    fontSize: 20,
    alignSelf: 'center',
  },
})

export default DeckView;
