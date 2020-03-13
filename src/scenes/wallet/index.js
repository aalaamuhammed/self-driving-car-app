import React, { Component } from 'react'
import 'react-native-gesture-handler'
import {  View } from 'react-native'
import PaymentStack from './walletNavigation/stackNav'



export default class WalletScreen extends Component {  
  static router = PaymentStack.router;
 render() {
  return ( 
   <View style={{flex:3}}>
    <PaymentStack navigation={this.props.navigation}/> 
  </View>
      
   
      )
    }
  }
  
  






