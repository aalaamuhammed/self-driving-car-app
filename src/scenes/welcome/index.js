import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,} from 'react-native';

export default class WelcomeScreen extends Component {
    constructor(props) {
      super(props);
      this._signInAsync=this._signInAsync.bind(this);
      this._reg=this._reg.bind(this);
  
  
      this.state = {
        click: 0,
        top:0
      };
    }

_signInAsync=()=>{
        //   this.setstate({ispressed1:true});
       // this.setState({ispressed1:!this.state.ispressed1});
      this.setState({click:2,top:200},()=>{
          
        console.log('SignInnnn')
        console.log(this.state.top)

        console.log(this.state.click)
        this.props.changeState(this.state.click,this.state.top);
        // this.props.swiperef.showFull();
        // console.log(this.props.swiperef); swiperef={this.swipeUpDownRef}


      });

    
         }
         _reg(){
            //   this.setstate({ispressed1:true});
            this.setState({click:1,top:200},()=>{
              console.log('register')
              console.log(this.state.top)

              console.log(this.state.click)
            this.props.changeState(this.state.click,this.state.top);
            // this.props.swiperef.showFull();

            // console.log(this.props.swiperef);

            });
        
        
        
             }
render()

{ return(
    
      <View style={{ alignItems: 'center',marginBottom:20}}>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CreateAccount')}>
              
      <Text style={styles.input2}> Create account</Text>
     
    </TouchableOpacity>

    <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Login')}>
              
              <Text style={styles.input}> Sign in</Text>
             
            </TouchableOpacity>

            </View>
    

)
} }

const styles = StyleSheet.create({
    input2:{ height: 40,
      borderColor: '#7a42f4',
      textAlign: 'center',
      color: 'white',
      paddingTop:5},
      button:{
        backgroundColor:'#242a37',
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        borderBottomLeftRadius:10,borderBottomRightRadius:10,
        height: 35,
      width:250,marginBottom:20},  
  
      button2:
      {
       backgroundColor:'#f1f2f6',
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        borderBottomLeftRadius:10,borderBottomRightRadius:10,
        height: 35,
      width:250,
    marginBottom:20},
      input: {
        height: 40,
        width:260,
        borderColor: '#ffffff',
        textAlign: 'center',
        color:'black',
        paddingTop:5
  },        
    
  });