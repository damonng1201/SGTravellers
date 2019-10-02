import React from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, FlatList, Image, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class Article extends React.Component {
  const articleId = 0;

  constructor(props){
    super(props);
    this.state = { isLoading: true };
    articleId = this.props.getParam('articleId', 0);
  }

  componentDidMount(){
    return fetch('https://www.sgtravellers.com/mobile-api/articles.php?pkey=sgtravellers&hash=3ed318a85ffd4404c860c7a93f7dcb40&type=1&article_id=' + articleId)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.data);
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

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View>
        <Text>Article</Text>
      </View>
    );
  }
}
