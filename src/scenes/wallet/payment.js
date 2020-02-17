import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class payment extends Component {

     state={
        balance:3
     }   
 render() {
  return (
    <View style={{flex:1}}>
     <View style={styles.firstblock}>
      <Text style={styles.urbalance}>Your balance</Text>
      <Text style={{fontSize:70}}>{this.state.balance}  </Text>
      <Text style={{fontSize:15}}>    EGP</Text>
    </View>
  <View style={styles.secblock}>
        <TouchableOpacity
         style={styles.iconstyle}
       >
            <Icon name='money' size={50} />
       </TouchableOpacity>
    
    
        <TouchableOpacity
        style={styles.iconstyle}
       >
            <Icon name='money' size={50} />
       </TouchableOpacity>
      
    </View>
   
    </View>
           
        )
    }
}
const styles=StyleSheet.create({
    firstblock:{
        flex:.7,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    urbalance:{
        fontSize:15,
        fontStyle:'italic'
    },
    secblock:{flex:.5,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-around',
      },
      iconstyle:{
        flex:.3,
        padding:15,
         alignItems:'center',
         justifyContent:'center',
         alignContent:'flex-end',
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2,
         },
         shadowOpacity: 0.13,
         shadowRadius: 5.6,
         
         elevation:1,
         borderRadius:5
      }

})