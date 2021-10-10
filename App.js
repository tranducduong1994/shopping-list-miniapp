/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Component} from 'ern-navigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

export default class AppRouter extends Component {
  static displayName = 'Product List';
  static navigationOptions = {
    hide: true,
    title: '',
    buttons: [],
  };

  handleNativateToProductDetail = () => {
    console.log('navigate');
    this.navigate({
      path: 'ShoppingProductMiniapp',
      jsonPayload: JSON.stringify({id: 123}),
    })
      .then(e => {
        console.log('Navigation Succeeded: ', e);
      })
      .catch(e => {
        console.error('Navigation Failed: ', e);
      });
  };

  render() {
    return (
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <View>
            <Text>Mini app: Navigate pass id = 123</Text>
            <Button
              title="Press me"
              onPress={this.handleNativateToProductDetail}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
