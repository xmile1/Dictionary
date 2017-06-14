import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const firebase = require('firebase');
const { View, TouchableHighlight, Text } = ReactNative;



class WordItem extends Component {


  render() {
const {english, english_erudite} = this.props.navigation.state.params;

    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText} >{english}</Text>
          <Text style={styles.liText} >{english_erudite}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = WordItem;
