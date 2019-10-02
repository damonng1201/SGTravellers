import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DealsScreen from '../screens/DealsScreen';
import ContestsScreen from '../screens/ContestsScreen';
import LuxeScreen from '../screens/LuxeScreen';

export default createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Deals: DealsScreen,
    Contests: ContestsScreen,
    Luxe: LuxeScreen,
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 10,
      },
      activeTintColor: '#ef473a',
      inactiveTintColor: '#ef473a',
      indicatorStyle: {
        backgroundColor: '#ef473a'
      },
      style: {
        backgroundColor: '#fff',
      }
    }
  }
);
