import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js');
const firebase = require('firebase');
const { View, TouchableHighlight, Text } = ReactNative;



class WordItem extends Component {

constructor(props){
    super(props)
  }

  render() {

    return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText} >{this.props.english}</Text>
          <Text style={styles.liText} >This is a test</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = WordItem;
