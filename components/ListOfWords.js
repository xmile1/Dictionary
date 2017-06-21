import React, {Component} from 'react';
import ReactNative from 'react-native';
const { View, TouchableHighlight, Text } = ReactNative;



class ListOfWords extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View >
          <Text >{this.props.item.french}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}



export default ListOfWords;
