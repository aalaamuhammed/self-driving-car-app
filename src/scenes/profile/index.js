import React, {Component} from 'react';
import {
  Modal,
  TouchableOpacity,
  TextInput,
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Animated,
  Image,

  FlatList,
  ImageBackground,
  Picker,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import CheckBox from 'react-native-check-box'
import i20 from '_assets/images/i20.png';
import Icon from 'react-native-vector-icons/Feather';
import {apis} from '../../constants'
import axios from 'axios'

//import {  } from 'react-native-gesture-handler';
const HEADER_MIN_HEIGHT = 100;
const HEADER_MAX_HEIGHT = 150;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);


export default class App extends Component {
  constructor(props) {
    super(props);
    this.scrollYAnimatedValue = new Animated.Value(0);
    this.windowWidth = Dimensions.get('window').width / 3.3;
    this.windowHeight = Dimensions.get('window').height / 12;
    this.state = {
      id:0,
      user: {
        name: null,
        mail: null,
        mobile: null,
        gender: null,//0 => female 1=> male
        birthDate: null
      },
      view: false,
     
      DATA: [
        {type:'list',title: 'Name :', keyboardType: 'default', key: 0, color: '#FF8900',placeholder:'write your name'},
        {type:'list',title: 'E-mail :', keyboardType: 'default', key: 1, color: '#FF8900',placeholder:'write your mail'},
        {type:'list',
          title: 'Mobile Number :',
          keyboardType: 'numeric',
          key: 2,
          placeholder:'write your mobile number'
        },
        {type:'list',
          title: 'Date of birth :',
          keyboardType: 'picker',
          key: 3,
        
        },
        {type:'list',title: 'Gender :', keyboardType: 'check-box', key: 4},
        {type:'button'}
      ],
      female:false,
      male:false,
      pickerText:'pickerText',
     
      edit:false
    };
  }
  pickerModal(TorF) {
    this.setState({view: TorF});
  }
  saveDate = (item, text) => {
    
      if(item.key === 0)
         {this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              name: text,
            }, // update the value of specific key
          }))}
        
     // return new object jasper object

    
     else if(item.key === 1){
         this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              mail: text,
            }, // update the value of specific key
          }))}
       
    // return new object jasper object

    
      if(item.key === 2)
        { this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              mobile: text,
            }, // update the value of specific key
          }))
        }
     // return new object jasper object

    
    if(  item.key === 4)
        { this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              gender: text,
            }, // update the value of specific key
          }))
        }
     // return new object jasper object

    
     if (item.key === 3)
        {this.setState(prevState => ({
            user: {
              // object that we want to update
              ...prevState.user, // keep all other key-value pairs
              birthDate: text,
            }, // update the value of specific key
          }))
        }
    
  //  console.log(this.state.user);
  };
  render_Item = item => {
    return (
      item.type!='button'?
      <View
        style={{
          flex: 1,
          flexDirection:'row',
         
          borderRadius: .5,
          margin: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 5,
          
          elevation: .5,
          padding: 5,
          paddingHorizontal: 10,
        }}>
       <Text style={{alignSelf:'center',fontSize:15}}>{item.title} </Text>
 {  (item.keyboardType!='picker')&&(item.keyboardType!='check-box')?
    (<TextInput
    placeholder = {item.placeholder} 
    onChangeText = {(text)=>{
      this.saveDate(item,text)
      }}
    autoComplete="off"
    autoCapitalize="none"
    autoCorrect={false}
    keyboardType={item.keyboardType}
     style={{flex:1}}/>)
   :item.keyboardType === 'picker'?
     <View style={{flex:1}}>
  
  <TouchableOpacity  activeOpacity={1} 
    style={{
      flex:1,
      paddingVertical:15,
      padding:3,
      borderBottomColor:item.color,
     }} onPress={()=>{this.pickerModal(true)} }>
      <Text>{this.state.user.birthDate}</Text>
    </TouchableOpacity>
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

 <DatePicker
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
       this.saveDate(item,text)
       console.log(item.key, text)
    }}
   />
   </View>
   
   

</TouchableOpacity>

</Modal>:null
     }
    
    </View>
    
    : item.keyboardType==='check-box'?
   <View style={{flexDirection:'row',flex:1}}>
    
     <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          male:!this.state.male,
          female:false
      })
      this.saveDate(item,'1')
    }}
    isChecked={this.state.male}
    leftText={"Male"}
    leftTextStyle={{fontSize:15}}
    checkBoxColor={'gray'}
    checkedCheckBoxColor={'orange'}
  
/>

<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          female:!this.state.female,
          male:false
      })
      this.saveDate(item,'0')
        
    }}
    isChecked={this.state.female}
    leftText={"female"}
    leftTextStyle={{fontSize:15}}
    checkBoxColor={'gray'}
    checkedCheckBoxColor={'orange'}
/>
    
   </View>


  :null}
    </View>
  : <View
  style={{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical:10
   
   
  }}>
  <TouchableOpacity
    activeOpacity={.7}
    style={{ backgroundColor: '#FF8900', borderRadius: 10, flex: 1,alignItems:'center'}}
    onPress={() =>
      this.props.navigation.navigate('ListOfOffers')
    }>
    <Text
      style={{
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 20,
        color: 'white',
      }}>
      Save
</Text>
  </TouchableOpacity>
</View>
    )};
  
    getUserData=async()=>{
      const url=apis.users_api+`/{${this.state.id}}`
      console.log(url)
       try {
     
         const response = await axios.get(
           apis.users_api,
         );
     
       console.log(response.data);
       
       } catch (error) {
         console.error(error);
       }
    }
  
  // componentDidMount(){
  //   this.getUserData()
  // }    

  render() {

      const scale1 = this.scrollYAnimatedValue.interpolate(
        {
          inputRange: [0, (120 -90)],
          outputRange: [1, .8],
          extrapolate: 'clamp'
        });
        const translateYI = this.scrollYAnimatedValue.interpolate(
          {
            inputRange: [0, (120 -90)],
            outputRange: [0,-(this.windowHeight+10) ],
            extrapolate: 'clamp'
          });
          const translateXI = this.scrollYAnimatedValue.interpolate(
            {
              inputRange: [0, (120 -90)],
              outputRange: [0,-(2*this.windowWidth-this.windowHeight) ],
              extrapolate: 'clamp'
            });
            const translateYT = this.scrollYAnimatedValue.interpolate(
              {
                inputRange: [0, (120 -90)],
                outputRange: [0,-(2*this.windowHeight+25) ],
                extrapolate: 'clamp'
              });

      
    return (
      <Animated.View style={styles.mainContainer}>
        <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
          <AnimatedFlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT+50}}
            data={this.state.DATA}
            renderItem={({item}) => this.render_Item(item)}
            keyExtractor={(item, index) => item + index}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } },
                },
              ],
              { useNativeDriver: true } // <-- Add this
            )}
          />
        </View>
       



        <Animated.View
          style={[
            styles.animatedHeaderContainer,
            {height:120 , backgroundColor: '#FF8900'},
          ]}>
        </Animated.View>

        <Animated.View 
        style={{ 
          position:'absolute',
          top:this.windowHeight,
          left:this.windowWidth,
          width:this.windowWidth+this.windowHeight,
          height:this.windowHeight+this.windowWidth,
          alignItems:'center',
         
        }}>
        <Animated.Image source={i20} 
        style={{width: '70%', height: '70%', borderRadius:10, transform:[{scale:scale1}, {translateY:translateYI},{translateX:translateXI}]}}/>
       <Animated.View style={{transform:[ {translateY:translateYT}]}}>
       <Text style={[styles.textStyle]}>
       {this.state.user.name}
            </Text>
            <Text
              style={[
                styles.textStyle,
                {color: 'gray', fontWeight: '200', fontSize: 15},
              ]}>
              {this.state.user.mail}
            </Text>
            </Animated.View>
        </Animated.View>
        <Modal
        animationType="fade"

        transparent={true}
        visible={!this.state.edit}
        > 
        <View style={{backgroundColor:'rgba(231, 230, 230,.3)',flex:1}}>
             <TouchableOpacity 
             activeOpacity={0.5} 
             onPress={()=>this.setState({edit:true})}
             style={{alignSelf:'flex-end',margin:5}}>
              <Icon name='edit' size={25} color='#F6F7F8' />
           </TouchableOpacity>
           </View>
        </Modal>
        
      </Animated.View>
     

           
         

    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },

  textStyle: {
    fontSize: 18,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationStyle: 'dotted',
    fontWeight: 'normal',
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  mainContainer: {
    flex: 1,
   // justifyContent: 'center',
   // flexDirection: 'row',

   // alignItems: 'center',
  },
  animatedHeaderContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: Platform.OS == 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    // justifyContent:'space-between',
    padding: 10,
  },
});