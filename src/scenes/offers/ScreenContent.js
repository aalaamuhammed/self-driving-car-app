import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,ImageBackground,StyleSheet,FlatList,Image} from 'react-native'
import noti3 from'_assets/images/didi1.webp'
import didi1 from '_assets/images/DIDI2.png'

export default class ScreenContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA : [
        {
          image:didi1,
          tile:'New Offer',
          key:1
        },
       
        {
          image:noti3,
          tile:'New Offer',
          key:3       
         },
         {
          image:didi1,
          tile:'New Offer',
          key:1
        },
        {
          image:didi1,
          tile:'New Offer',
          key:1
        },
      ]};
    }
  
  render() {
    return (
        <View style={styles.FlatListContainer}>
          <FlatList 
          data={this.state.DATA} 
         keyExtractor={item => item.key}
          renderItem={({item}) =>
          [ 

          <View style={styles.card}>
            <ImageBackground
              style={styles.imgOnCard}
              source={item.image}
            >
              <View style={styles.typingOnCard}> 
                <Text style={styles.textOnCard}>{item.tile}</Text>
                </View>
            </ImageBackground>
            
          </View>
           
          ]} 
     />  
         </View>
      

    )
  }
}
const styles=StyleSheet.create({
 
  FlatListContainer:{flex:3},

  card:
    {flex: 1, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical:5,
    backgroundColor:'#F6F7F8',
    position:'relative',
    alignItems:'center',
    paddingHorizontal: 10,
    paddingTop:25
  },
  imgOnCard:{
    width:350,
    height: 200,
    borderRadius:20,
    borderColor:'#d6d7db',
    borderWidth:2
  },
  typingOnCard:{
    flex:1,
    justifyContent:'flex-end',
    alignContent:'flex-end',
    paddingBottom:30
  },
  textOnCard:{
    fontSize:35,
    backgroundColor:'rgba(80, 60, 10, 0.8)',
    fontStyle:'normal',
    textAlign:'center',
    textDecorationStyle:'double',
    fontWeight:'normal',
    textAlignVertical:'center',
    color:'#F6F7F8'
  }



  })

