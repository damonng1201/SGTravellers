import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';

export default class SideMenu extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <View>
          <View style={styles.menuItem}>
            <Text>Search</Text>
          </View>
          <View style={styles.menuItem}>
            <Text>General Help / Bug Report</Text>
          </View>
          <View style={styles.menuItem}>
            <Text onPress={()=>navigate('Terms')}>Terms of Use</Text>
          </View>
          <View style={styles.menuItem}>
            <Text onPress={()=>navigate('About')}>About SGTravellers App</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
