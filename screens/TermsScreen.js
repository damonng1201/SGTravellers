import React from 'react';
//import {WebView} from 'react-native-webview';
import {WebView} from 'react-native';

export default class Terms extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://sph.com.sg/terms-and-conditions/app-for-ios/'}}
        />
    );
  }
}
