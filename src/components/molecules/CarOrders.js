import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity, Modal} from 'react-native';
import MapView,{AnimatedRegion} from 'react-native-maps';
import { Dimensions } from 'react-native'
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';


export default class CarOrders extends React.Component {
   
  constructor(props){
    super(props);
    this.select=this.select.bind(this);
    this.state = {
        isloading:true,
        carOrdersBtn:false,
        rightMark:false,
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').height/2,
        click:1,
        location:new AnimatedRegion({
          latitude:null,
          longitude:null,    
        })
  }
    
      
 }
 select(){
    this.setState({click:1},()=>{

      this.props.changeState(this.state.click);

    })}
 _carOrders=()=>{
  this.setState({carOrdersBtn:true})
}
_makeCarHorn=(item)=>{
  this.setState({rightMark:true})
  setTimeout(()=>{
    this.setState({carOrdersBtn:false,rightMark:false})
  },1000)
  
}

 render() {
   const a= 
   
    <View style={{flex:1 , position:'absolute',bottom:this.state.height-30,borderWidth:5,borderRadius:10,borderColor:'#F6F7F8'}}> 
   <FlatList
   data={[{title:'Make the car horn',key:1},{title:'Play some music',key:2}]}
   renderItem={({item}) =>
   <View style={{flex:1,
     flexDirection:'row',
     justifyContent:'space-between',
     backgroundColor:'#F6F7F8',
     padding:5,
     flexDirection:'row'}}>
     <Text style={{paddingEnd:70}}>{item.title}</Text> 
     <TouchableOpacity  onPress={()=>this._makeCarHorn(item)}>
     <Icon name='chevron-right' size={15}/>
     </TouchableOpacity> 
   </View>} 
 />
   </View>
   


   const b=
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
   <Icon2 name='verified' size={150} color='#F6F7F8'/>
   </View>


   return(
    <React.Fragment>
    <View style={styles.viewOnMap}>
    <TouchableOpacity style={styles.changeRoute}>
      <Text style={{fontSize:15, color:'#F6F7F8'}}>Change Route</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.stopBtn}>
      <Text style={{fontSize:15, color:'#F6F7F8'}}>Stop</Text>
     </TouchableOpacity>

  </View>
  <View style={{position:'absolute',top:0,right:0,paddingTop:35,padding:20}}>
      <TouchableOpacity style={{borderRadius:10,backgroundColor:'#F6F7F8',
       padding: 10}} onPress={this._carOrders}>
      <Text style={{fontSize:15, color:'#FF8900'}}>Car Orders</Text>
      </TouchableOpacity>
    </View>
    


  
  <Modal
         animationType="fade"
         style={{backgroundColor:'red'}}
         transparent={true}
         visible={this.state.carOrdersBtn}
         >
         <View style={{backgroundColor:'rgba(255, 137, 0 ,.5)',flex:1,alignItems:'center',position:'relative'}}>
          {!this.state.rightMark?a:b}

         </View>
       </Modal>
       </React.Fragment>

    
   )}}

   const styles=StyleSheet.create({
     viewOnMap:{
       position:'absolute',
       bottom:0,
       right:0,
       left:0,
       paddingBottom:30,
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row'},

       changeRoute:{
         borderRadius:10,
         backgroundColor:'#FF8900',
       padding: 10,
       paddingHorizontal:20,
       borderTopRightRadius:0,
       borderBottomRightRadius:0,
       borderRightWidth:.5,
       borderColor:'#F6F7F8'},

       stopBtn:{
        borderRadius:10,
        backgroundColor:'#FF8900',
        padding: 10,
        paddingHorizontal:55,
        borderBottomLeftRadius:0,
        borderTopLeftRadius:0
       }

    })