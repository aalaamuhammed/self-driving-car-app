import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import  ScreenContent from './ScreenContent'
import {OrangeHeader} from '_molecules';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
   

  }
  }
  move=()=>{
    this.props.navigation.openDrawer()
  }

  render() {

    return (
      <View style={styles.container} >
       
        <OrangeHeader com={<ScreenContent/>} title={'Offers'} move={this.move}/>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",

    },



})