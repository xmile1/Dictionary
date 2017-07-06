import React, {Component} from 'react';
import ReactNative from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
const styles = require('../styles.js');
const firebase = require('firebase');
const { View, TouchableHighlight, Text } = ReactNative;


class WordItem extends Component {

constructor(props) {
    super(props);
}



onPressIcon(){
var config = {
  apiKey: "AIzaSyDWedZY1svNHxPUi2ReQJTlCf9Q60407E8",
  authDomain: "streetfrench-a84df.firebaseapp.com",
  databaseURL: "https://streetfrench-a84df.firebaseio.com"
};

var ref = firebase.database().ref();

           var likes_words = ref.child("items").once('value');

                          likes_words.then(items => {
                              items.forEach(item => {

                                 //for each item do this
                                 let currentlike = item.val().likes;
                                 ref.child("items/"+item.key+"/likes").transaction(function(c‌​urrentLike)
                                      { return (currentLike || 0) + 1; }
                                 );
                              })
                         });


// var ref = firebase.database().ref();

//             var likes_words = ref.child("items").once('value');

//                 likes_words.then(items => {
//                     items.forEach(item => {

//                      //for each item do this
//                      let currentlike = item.val().likes;
//                      ref.child("items/"+item.key+"/likes").update((currentlike+1));

//                     })
//                });

}

render() {
const {english, english_erudite, likes} = this.props.navigation.state.params;

   return (
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText} >{english}</Text>
          <Text style={styles.liText} >{english_erudite}</Text>

          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            onPress={this.onPressIcon.bind(this)}
          />
          <Text style={styles.liText} >{likes} like(s)</Text>

        </View>
      </TouchableHighlight>
    );
  }
}

export default WordItem;
