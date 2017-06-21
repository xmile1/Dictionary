import React, {Component} from 'react';
import ReactNative from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import firebase from 'firebase';
const { View, TouchableHighlight, Text } = ReactNative;

const {
  AppRegistry,
  ListView,
  StyleSheet,
  TouchableOpacity,
} = ReactNative;





class WordOfTheDay extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      items: [],
      loading: true
    };
  }

  render(){

    return(
      <Card
        title='WORD OF THE DAY'
      >
              <ListView
              automaticallyAdjustContentInsets={false}
              dataSource={this.state.dataSource}
              renderRow={this._renderWordOfTheDay.bind(this)}
              enableEmptySections={true}
              />

      </Card>

      );

  }


 _renderWordOfTheDay(item) {
     const { navigate } = this.props.navigation;
     return (
      <ListItem
        title={
              <View item={item}
               onPress={() =>
               navigate('Details', {...item} )}
               />
              }
        />
      );
  }

}


export default WordOfTheDay ;
