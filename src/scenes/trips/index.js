import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { Text, TouchableOpacity,View, FlatList,TextInput,StyleSheet,SectionList,Image } from 'react-native'
import AppContainer from './tabnavigator'
import {OrangeHeader} from '_molecules';

import i20 from '_assets/images/i20.png'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class App extends Component {
  static router =AppContainer.router;
  move=()=>{
    this.props.navigation.openDrawer()
  }
  render() {
 
    return (
      <View style={{flex:1,backgroundColor:'#FF8900'}}>
       <OrangeHeader com={ <AppContainer/>} title={'Trips'} move={this.move}/>
      </View>
    
 
    )
  }
}




