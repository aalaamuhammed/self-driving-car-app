import React, { Component } from 'react'
import {  View,Modal } from 'react-native'
import Icon1 from 'react-native-vector-icons/Octicons'
export default class VerifyModal extends Component {
 render() {
   return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Modal
       animationType='fade'
       transparent={true}
       visible={this.props.visibility}
      >
      <View style={{flex:1,justifyContent:'center',alignItems:'center',margin:50}}>     
       <Icon1 
        name='verified' 
        size={80} 
        color='rgba(255, 137, 0 ,1)'
        style={{
         alignSelf:'center',
         backgroundColor:'#F9F9F9',
         padding:50,
         borderRadius:8,
         shadowColor: "#000",
         borderWidth:.1,
         borderColor:'#000',
         shadowOffset:
         {width: 0,
          height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5,}} />  
         </View>
       </Modal>
    </View>
     
        )
    }
}
