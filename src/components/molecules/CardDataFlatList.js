import React, { Component } from 'react'
import { Text, View,FlatList,TouchableOpacity,Modal } from 'react-native'
import { TextInput} from 'react-native-gesture-handler';
// import DatePicker from 'react-native-date-picker'

export default class CardDataFlatList extends Component {
  constructor(props) {
    super(props);
     this.state = {
         date:new Date(),
         view:false,
         pickerText:null,
         color:'#8D8D8D'
     
     }}
  pickerModal(TorF)
  {
   this.setState({view:TorF})
   
  }

  render(){
   return (
    <View 
    style={{
      borderWidth:1,
      borderTopLeftRadius:0,
      borderTopRightRadius:0,
      borderRadius:20,borderColor:'#F9F9F9'}}>
      <FlatList
       data={this.props.DATA}
       keyExtractor={(item, index) => item + index}
       renderItem={({ item }) =>
       [
        <View 
         style={{
           flex:1 ,
           backgroundColor:'#F9F9F9',
           paddingHorizontal:8
           }}>
          
        {item.keyboardType!=='Picker'?
       
          <TextInput 
            placeholder = {item.title} 
            onChangeText = {(text)=>{
              this.props.saveDate(item,text)
              }}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={item.keyboardType}
            style={{
              borderBottomColor:item.color,
              borderBottomWidth:.5,
              borderWidth:0,
           }}
            />
         
         : 
            <TouchableOpacity  activeOpacity={1} 
            style={{
              flex:1,
              paddingVertical:15,
              padding:3,
              borderBottomColor:item.color,
             borderBottomWidth:.5,
             borderWidth:0,
             }} onPress={()=>this.pickerModal(true)}>
              <Text style={{color:this.state.color}}>{(this.state.pickerText===null)?item.title:this.state.pickerText}</Text>
            </TouchableOpacity>
           } 
           {
           (this.state.view)?
           
           <Modal
           animationType="fade"
           
           transparent={true}
           visible={this.state.view}
           >
           <TouchableOpacity 
           style={{
             backgroundColor:'rgba(255, 137, 0 ,.1)',
             flex:1,
             alignItems:'center',
             justifyContent:'center',
             
            }}
           onPress={()=>this.pickerModal(false)}>
            <View style={{
                flex:.5,
                borderColor:'white',
                borderWidth:5,
                borderRadius:20}}>
         
            {/* <DatePicker
              fadeToColor='none'
              style={
                {
                flex:1,
                backgroundColor:'white',
                
               }}
                date={this.state.date}
                mode='date'
                onDateChange={(date)=>
                 { this.setState({date:date})
                 const text=String(this.state.date).substring(4,15)
                 this.setState({pickerText:text})
                 this.state.color='black'
                  this.props.saveDate(item,text)
               }}
              /> */}
              </View>
              
              
          
           </TouchableOpacity>
          
         </Modal>:null
            }            
        </View>]}
      />
        </View>      
    )
  }

}
