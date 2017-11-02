/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import idx from 'idx';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  headline: PropTypes.string.isRequired,
  editText: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

const WelcomeMessage = ({ headline, editText, instructions }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>{headline}</Text>
    <Text style={styles.instructions}>{editText}</Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </View>
);

WelcomeMessage.propTypes = propTypes;

const MESSAGES = {
  WELCOME: {
    HEADLINE: 'Welcome to React Native!',
    EDIT_TEXT: 'To get started, edit App.js',
    INSTRUCTIONS: {
      ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
      android:
        'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
    },
  },
};

class App extends Component {
  render() {
    return (
      <WelcomeMessage
        headline={idx(MESSAGES, _ => _.WELCOME.HEADLINE)}
        editText={idx(MESSAGES, _ => _.WELCOME.EDIT_TEXT)}
        instructions={Platform.select(idx(MESSAGES, _ => _.WELCOME.INSTRUCTIONS))}
      />
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
