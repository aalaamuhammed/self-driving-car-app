import React, { Component } from 'react'
import { Text, View, ImageBackground,Modal, Button, Alert } from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import masterCard from './unnamed.png'
import AddCardModal from './addCard'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import {OrangeHeader,CardsFlatList} from '_molecules';
//import OrangeHeader from '.../components/orangeheader'

export default class ViewCard extends Component {

 constructor(props) {
  super(props);
    this.state = {
        visibility:false,
       
        DATA:[{image:masterCard},null],
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').height/2,
    };
 }
 move=()=>{
  this.props.navigation.navigate('topTab')
}  
    render(){
      const a = <CardsFlatList addCard={()=>this.props.navigation.navigate('addCard')} DATA={this.state.DATA}  cardDetails={()=>this.props.navigation.navigate('cardDetails')}/>

       return (
          
               <View style={{flex:1}}>
                   <OrangeHeader title="Wallet" move={this.move} com={a} />
                          
          </View>

        )
    }
}