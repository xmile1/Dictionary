'use strict';
import Expo from 'expo';
import React, {Component, TextInput, ActivityIndicator} from 'react';
import ReactNative from 'react-native';
import SearchBar from 'react-native-searchbar';
const firebase = require('firebase');
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const WordItem = require('./components/WordItem');
const Spinner = require('./components/common/Spinner');
const styles = require('./styles.js');


const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
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
      }),
      items: [],
      loading: false
    };
    this.itemsRef = this.getRef().child('items');
    this._handleResults = this._handleResults.bind(this);
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
          english_erudite: child.val().english_erudite,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items),
        items: items
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


        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={this.state.items}
          handleResults={this._handleResults.bind(this)}
          showOnLoad
          allDataOnEmptySearch
        />
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
          navigate('Details', {...item} )}  />
    );
  }

  _handleResults(results){
    this.setState({dataSource: this.state.dataSource.cloneWithRows(results)})
  }

}

const App = StackNavigator({
  Home: { screen: FirebaseReactNative },
  Details: { screen: WordItem },
});


Expo.registerRootComponent(App);
