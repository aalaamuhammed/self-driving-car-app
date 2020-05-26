import React, { Component } from 'react'
import { Text, View,FlatList,TouchableOpacity,ImageBackground } from 'react-native'

export default class CardsFlatList extends Component {
 render() {
  return (
   <React.Fragment>
     <FlatList
      data={this.props.DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) =>
      [
       <View>
        {item===null?
        <View
         style={{
         flex:.5 ,
         alignItems:'center',
         justifyContent:'flex-start',
         borderStyle:'dashed',
         borderWidth:2,
         padding:80,
         borderRadius:5,
         borderColor:'#ADACF1',
         margin:25,
         alignItems:'center',
         justifyContent:'center'
        }}>
         <TouchableOpacity  onPress={this.props.addCard}>
           <Text style={{color:'#8D8D8D'}}>ADD CARD</Text>
         </TouchableOpacity>          
        </View>
    :  
        <View style={{ flex:.5 ,
         alignItems:'center',
         justifyContent:'flex-start',
         margin:25,
         alignItems:'center',
         justifyContent:'center'}}>
           <TouchableOpacity  onPress={this.props.cardDetails}>
                      <ImageBackground 
            style={{width:350,height:200}}
            source={item.image} />
           </TouchableOpacity>

        </View>}       
       </View>]}/>

    </React.Fragment>
        )
    }
}
