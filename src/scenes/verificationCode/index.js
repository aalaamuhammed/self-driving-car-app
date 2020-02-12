import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { setState } from 'expect/build/jestMatchersObject';

export default class VerifyCode extends Component {
    constructor(props) {
      super(props);
  this._home=this._home.bind(this);
      this.state = {
        click: 1,
        top:0
      };


    }
    _home=() => {
     // this.props.navigation.navigate('Home');
console.log('finished')
    }
  
    render() {
      
      return (
 <KeyboardAvoidingView   behavior="padding" keyboardVerticalOffset={16 * -30}>

  <View style={{marginBottom:20}}>

     <Text style={{
    fontSize: 20,textAlign:'center',margin:25,marginBottom:30,color:'#242a37',
    fontWeight: '600',}}>Verification Code</Text>

     </View>   



   <View style={{marginBottom:30,flexDirection: "row",alignItems:'center', justifyContent: 'center'}}>

   <TextInput    keyboardType="numeric"
              underlineColorAndroid = '#ffd420'
                placeholder=" 0"
                name ='1'
                maxLength={1}>


   </TextInput>
   <TextInput    keyboardType="numeric"
              underlineColorAndroid = '#ffd420'
                placeholder=" 0"
                name ='2'
                maxLength={1}>

   </TextInput>
   <TextInput    keyboardType="numeric"
              underlineColorAndroid = '#ffd420'
                placeholder=" 0"
                name ='3'
                maxLength={1}>

   </TextInput>
   <TextInput    keyboardType="numeric"
              underlineColorAndroid = '#ffd420'
                placeholder=" 0"
                name ='4'
                maxLength={1}>

   </TextInput>
   </View>

   <Text style={{color:'orange',textAlign:'center'}}>Resend code</Text>

   
   
   <TouchableOpacity style={styles.buttonContainer2} onPress={()=>this.props.navigation.navigate('Home')}>
   <Text style={{textAlign:'center',  paddingTop:5,color:'white'}}>Next</Text>
  </TouchableOpacity>  

  </KeyboardAvoidingView>



      )
    }
}
const styles=StyleSheet.create({

 buttonContainer2:{
        backgroundColor:'#242a37',
    
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        height: 35,
        margin:15,
        alignItems: 'center'
    },
  
})