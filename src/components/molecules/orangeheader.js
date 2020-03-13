
import React, { Component } from 'react'
import { Text, View ,Image, StyleSheet} from 'react-native'
import i20 from '_assets/images/i20.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class OrangeHeader extends Component {
    render() {
        return (
            <View style={styles.Container}>
            <View style={styles.iconStyle}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.move()}>
              <Icon name='arrow-left' size={25} color='#F6F7F8'/>
           </TouchableOpacity>
            <Image source={i20} style={{width: 40, height: 40, borderRadius:15}}/>
            </View>
            <View style={{flex:4}}> 
        <Text style={styles.textStyle} >{this.props.title}</Text>
     
             </View>
           </View>
        )
    }
}
const styles =StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#FF8900'
    },
    iconStyle:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingEnd:15,
        paddingStart:15
    },
    textStyle:{
        fontSize:45,
        fontStyle:'normal',
        textAlign:'center',
        textDecorationStyle:'double',
        fontWeight:'bold',
        textAlignVertical:'center',
        color:'#F6F7F8'
    }
})