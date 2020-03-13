import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,ImageBackground,StyleSheet,FlatList,Image} from 'react-native'
import noti3 from'_assets/images/didi1.webp'
import didi1 from '_assets/images/DIDI2.png'
import {OrangeHeader} from '_molecules';
import i20 from '_assets/images/i20.png'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class App extends Component {
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
         }
      ]};
    }
    move=()=>{
      this.props.navigation.openDrawer()
    }
  render() {
    return (
      <View style={styles.container}>
      <OrangeHeader title="Offers" navigation={this.props.navigation} move={this.move}/>
        <View style={styles.FlatListcontainer}>
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
              <View style={styles.typingonCard}> 
                <Text style={styles.textonCard}>{item.tile}</Text>
                </View>
            </ImageBackground>
            
          </View>
           
          ]} 
     />  
         </View>
      </View>

    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1
    },
    thinheader:{
      flex:2,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end',
      paddingEnd:15,
      paddingStart:15
    },
  header: 
    {flex:1,
      justifyContent:'center',
      backgroundColor:'#FF8900'},
  title:{
    fontSize:45,
    fontStyle:'normal',
    textAlign:'center',
    textDecorationStyle:'double',
    fontWeight:'bold',
    textAlignVertical:'center',
    color:'#F6F7F8'
  },
  FlatListcontainer:{flex:3},

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
  typingonCard:{
    flex:1,
    justifyContent:'flex-end',
    alignContent:'flex-end',
    paddingBottom:30
  },
  textonCard:{
    fontSize:35,
    backgroundColor:'rgba(80, 60, 10, 0.8)',
    fontStyle:'normal',
    textAlign:'center',
    textDecorationStyle:'double',
    fontWeight:'normal',
    textAlignVertical:'center',
    color:'#F6F7F8'
  },
  main:{
    textAlign: 'center',
    color: '#FFFF',
    fontSize: 30,
    paddingBottom:10,
    backgroundColor:'#FF5733',
    borderRadius: 4,
    borderBottomWidth:5,
    borderColor: '#d6d7da'
  },
  type:{
    textAlign: 'center',
    color: '#FFFF',
    fontSize: 20,
    paddingBottom:10,
    backgroundColor:'#F9822B',
    borderRadius: 80,
    
  },
  buttonStyle:{
    paddingTop:10,
    
    
 
  }



  })

