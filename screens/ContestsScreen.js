import React from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Card } from 'react-native-elements';

export default class Contests extends React.Component {
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    return fetch('http://www.sgtravellers.com/mobile-api/contest.php?pkey=sgtravellers&hash=3ed318a85ffd4404c860c7a93f7dcb40')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _listEmptyComponent() {
    return (
      <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
        <Text>There are no new contests</Text>
      </View>
    );
  }

  _listFooterComponent() {
    return (
      <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
        <Text style={{fontStyle: 'italic'}}>*Apple, Inc. is not a sponsor of this contest, nor is Apple, Inc. in any way affiliated with this contest.</Text>
      </View>
    );
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Card image={{uri: item.mobile_images}} containerStyle={{padding: 0, margin: 0}}></Card>}
          keyExtractor={({id}, index) => id}
          ListEmptyComponent={this._listEmptyComponent}
          ListFooterComponent={this._listFooterComponent}
        />
    );
  }
}
