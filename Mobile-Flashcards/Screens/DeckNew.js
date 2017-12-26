/*PURPOSE: this component is responsible for taking the title and possibly
the questions and answers for the App. Not sure If a new screen is
needed for the Q&A.

TODO:
After I create the list of Decks to be added to the Store,
I need to return here to:
- add the new title to the Store
- send the title over to the DeckQuestions.js file to be used as a key to add questions

*/

import React from 'react'
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Button from '../Components/Button'
import { white } from '../Utils/Colors'
import DeckQuestions from './DeckQuestions'
import { connect } from 'react-redux'
import { addTitle } from '../actions'

class DeckNew extends React.Component {

  state: {
    title: '',
  }

  render() {

    const { navigate } = this.props.navigation;

    const saveTitle = () => {
      this.props.dispatch(addTitle({
         title: this.state.title
      }))
    }


    return(
      <KeyboardAvoidingView style={{flex: 1}} behavior='padding'>
        <View style={styles.TopSection}>
          <Text style={styles.TextStyle}> What is the Title for this new Deck? </Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Title here"
              onChangeText={(title) => this.setState({title: title}) }
              />
        </View>
        <Button
          buttonText='Next'
            onPress={() => {
              navigate('DeckQuestions', { title: `${this.state.title}` } )
              saveTitle()
/*TODO: implement mapStateToProps to possible remove this function altogether*/
            }
            }
          />
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  TopSection: {
    flex:1,
    justifyContent: 'space-around',
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
  TextStyle: {
    fontSize: 40,
    textAlign: 'center',
  },
  TextInput: {
    fontSize: 20,
    height: 60,
    width: 300,
    textAlign: 'center',
  }
})

function mapStateToProps(state) {
  return {

  }
}


export default connect(mapStateToProps)(DeckNew)
