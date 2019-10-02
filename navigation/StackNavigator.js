import React from 'react';
import { Platform, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Article from '../screens/AboutScreen';

export default createStackNavigator(
  {
    Article: {
      screen: Article,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Image style={{width: 150, height: 25}} source={require('../assets/images/logo.png')} />,
        headerStyle: {
          backgroundColor: '#918871'
        },
        headerRight:
          <TouchableOpacity onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <Icon name="bars" size={20} color="#fff" style={styles.bar} />
          </TouchableOpacity>
      })
    }
  }
);
