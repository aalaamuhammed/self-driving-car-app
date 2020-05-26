import React, { Component } from 'react'
import 'react-native-gesture-handler'
import {  View,Button } from 'react-native'
import TopTabNav from './walletNavigation/tabNav'
import {OrangeHeader} from '_molecules';


export default class TopTabScreen  extends Component {
  move=()=>{
    this.props.navigation.openDrawer()
  }
  static router = TopTabNav.router;
  render() {
 
    return (
        <View style={{flex:1}}>
        <OrangeHeader title="Wallet" navigation={this.props.navigation} move={this.move} />
        <View style={{flex:2.5}}>
        <TopTabNav navigation={this.props.navigation}/>
        </View>
      </View>
 
    )
  }
}






