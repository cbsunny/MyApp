import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  Text,
  View,
  NativeModules
} from 'react-native';
var BGNativeModuleExample = NativeModules.BGNativeModuleExample;

import {styles} from './static/style/style';

export default class Citylist extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      cities: this.ds.cloneWithRows([])
    };
  }
  getdata(url, suc, err) {
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if(data.errno == 0) {
        suc && suc(data.data)
      }
    })
    .catch((e) => {
        // console.log(e)
    });
  }
  componentDidMount(){
    BGNativeModuleExample.addEvent('Birthday Party', '4 Privet Drive, Surrey=====>');

    var scope = this;
    this.getdata('https://apikuai.baidu.com/city/getstartcitys', function(data) {

        scope.setState({
            cities: scope.ds.cloneWithRows(data.cities)
        });
        //scope.state.citys = data.cities;
        //this.getdata('https://apikuai.baidu.com/city/getstartcitys', (data) => {
        //  this.state.citys = data.cities;
        //});
    });
  }

  onPressAction(data){
    alert(data.cnname)
  }

  render() {
    return (
      <View style={styles.container}>
          <ListView style={styles.listView} enableEmptySections={true}
              dataSource={this.state.cities}
              renderRow={(rowData) =>
              <View style={styles.listItem} >
                <Text onPress={() => this.onPressAction(rowData)}>{rowData.cnname}</Text>
              </View>
              }
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('Citylist', () => Citylist);