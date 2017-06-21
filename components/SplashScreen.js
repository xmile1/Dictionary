import React, {Component} from 'react';
import ReactNative from 'react-native';
import { List, ListItem, Card, Icon } from 'react-native-elements';
import firebase from 'firebase';
const { View, TouchableHighlight, Text } = ReactNative;

const {
  AppRegistry,
  ListView,
  StyleSheet,
  TouchableOpacity,
} = ReactNative;



class SplashScreen extends Component{
  render(){
    return(
          <Icon
            reverse
            name='ios-american-football'
            type='ionicon'
            color='#517fa4'
          />
      );
  }


}

export default SplashScreen;
