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





class FullList extends Component{

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
        dataSource: ds.cloneWithRows([])
    };
}


componentWillMount() {
  // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  //   this.setState({
  //       dataSource: ds.cloneWithRows(this.props.items)
  //   });

}




  render(){


    return(
      <Card
        title='FULL LIST'
      >
              <ListView
              automaticallyAdjustContentInsets={false}
              dataSource={this.props.dataSource}
              renderRow={this.props.renderRow}
              enableEmptySections={true}
              />
      </Card>

      );

  }

}


export default FullList ;

