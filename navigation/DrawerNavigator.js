import React from 'react';
import { Platform, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBarIcon from '../components/TabBarIcon';
import TabNavigator from './TabNavigator';
import Article from '../screens/AboutScreen';
import About from '../screens/AboutScreen';
import Terms from '../screens/TermsScreen';
import SideMenu from '../screens/SideMenu';
import styles from '../styles/main';

const MainStack = createStackNavigator(
  {
    Classifieds: {
      screen: TabNavigator
    },
    Article: {
      screen: Article
    },
    About: {
      screen: About
    },
    Terms: {
      screen: Terms
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
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
);

export default createDrawerNavigator(
  {
    MainStack
  },
  {
    contentComponent: SideMenu,
    drawerPosition: 'right'
  }
);
