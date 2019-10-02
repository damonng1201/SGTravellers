import React from 'react';
import {View, Text} from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>About SG Travellers App{'\n\n'}
  			The sgtravellers mobile app is a new integrated initiative by Singapore Press Holdings, Limited (SPH) - Singapore's leading media group - to provide mobile audiences with the LATEST in travel stories, news and deals that are both useful and relevant to all outbound Singapore travellers, and those planning to travel.{'\n\n'}
  			It is a mobile app that allows mobile users to access the most current travel stories which are drawn from the various travel sections of SPH Print editions, including those from our hugely popular biannual  "NATAS" supplements in The Straits Times &amp; Lianhe Zaobao.{'\n\n'}
  			Plus, travel ads are also uploaded DAILY, for mobile users to easily get details of the latest travel packages or airfare deals while on the go.{'\n\n'}
  			The App also allows mobile users to enter our monthly contests anywhere and anytime to win attractive prizes such as air tickets &amp; travel packages.{'\n\n'}
  			AND, the best part of all of the above is that it comes FREE !{'\n\n'}
  			For destination stories, please bookmark our main website - sgtravellers.com{'\n\n'}
  			Happy Journeying &amp; Bon Voyage!</Text>
      </View>
    );
  }
}
