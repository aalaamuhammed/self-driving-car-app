import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { Text, TouchableOpacity,View, FlatList,TextInput,StyleSheet,SectionList,Image } from 'react-native'
import AppContainer from './tabnavigator'
import {OrangeHeader} from '_molecules';

import i20 from '_assets/images/i20.png'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class App extends Component {
  move=()=>{
    this.props.navigation.openDrawer()
  }
  render() {
 
    return (
      <View style={{flex:1}}>
       <OrangeHeader title="Trips" navigation={this.props.navigation} move={this.move}/>
      <View style={{flex:3}}>
        <AppContainer/>
      </View>
      </View>
    
 
    )
  }
}


const styles =StyleSheet.create({
  header:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#FF8900'
  },
  thickheader:{
      flex:2,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      paddingEnd:15,
      paddingStart:15},
  Textstyle:{
      fontSize:45,
      fontStyle:'normal',
      textAlign:'center',
      textDecorationStyle:'double',
      fontWeight:'bold',
      textAlignVertical:'center',
      color:'#F6F7F8'}
})



