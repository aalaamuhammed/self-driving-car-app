import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Entypo'


export default class payment extends Component {

     state={
        balance:3
     }   
 render() {
  return (
    <View style={{flex:1}}>
     <View style={styles.firstblock}>
      <Text style={styles.urbalance}>Your balance</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:70,paddingLeft:5}}>{this.state.balance}</Text>
      <Text style={{fontSize:15,alignSelf:'flex-end'}}>EGP</Text>
      </View>
    </View>
  <View style={styles.secblock}>
        <TouchableOpacity
         style={styles.iconstyle}
         onPress={()=>this.props.navigation.navigate('addMoney')}
       >
            <Icon1 name='credit' size={50} />
            <Text>Add Money</Text>

       </TouchableOpacity>
    
    
        <TouchableOpacity
        style={styles.iconstyle}
        onPress={()=>{this.props.navigation.navigate('viewCard') 
        console.log('viw cards') }}
       >
            <Icon1 name='credit-card' size={50} />
            <Text>View Cards</Text>

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
        padding:10,
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
         
         elevation:2,
         borderRadius:5
      }

})