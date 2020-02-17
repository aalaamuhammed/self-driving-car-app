import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { Text, View,StyleSheet,TouchableOpacity,Image } from 'react-native'
import AppContainer from './tabnav'
import i20 from '_assets/images/i20.png'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Maian extends Component {
  
  render() {
 
    return (
        <View style={{flex:1}}>
        <View style={styles.header}>
         <View style={styles.thickheader}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <Icon name={'arrow-left'} size={25} color='#F6F7F8' />
         </TouchableOpacity>
         <Image source={i20} style={{width: 40, height: 40, borderRadius:15 }}/>
         </View>
         <View style={{flex:4}}> 
          <Text style={styles.Textstyle} >Wallet</Text>
  
          </View>
        </View>
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




