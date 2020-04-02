import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import Stack from './navigation/stacknavigator';
export default class App extends Component {
  static router = Stack.router;
  constructor(props) {
    super(props);
    this.state = {};
  }
  move = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    return (
      <View style={styles.container}>
        <Stack navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
