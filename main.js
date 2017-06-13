
'use strict';
import Expo from 'expo';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const firebase = require('firebase');
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const WordItem = require('./components/WordItem');
const styles = require('./styles.js');


const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = ReactNative;


import {
  StackNavigator,
} from 'react-navigation';



// Initialize Firebase
const firebaseConfig = {
     apiKey: "AIzaSyDWedZY1svNHxPUi2ReQJTlCf9Q60407E8",
    authDomain: "streetfrench-a84df.firebaseapp.com",
    databaseURL: "https://streetfrench-a84df.firebaseio.com",
    projectId: "streetfrench-a84df",
    storageBucket: "streetfrench-a84df.appspot.com",
    messagingSenderId: "551358813028"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);



class FirebaseReactNative extends Component {

 static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          french: child.val().french,
          english: child.val().english,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <StatusBar title="Street French" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>


      </View>
    )
  }



  _renderItem(item) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem item={item} onPress={() =>
          navigate('Details' )}  />
    );
  }

}

const App = StackNavigator({
  Home: { screen: FirebaseReactNative },
  Details: { screen: WordItem },
});


Expo.registerRootComponent(App);
