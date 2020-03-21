import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Platform, Animated,Image,ScrollView } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import i20 from '_assets/images/i20.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
const HEADER_MIN_HEIGHT = 140;
const HEADER_MAX_HEIGHT = 200;

export default class OrangeHeader extends Component {
  constructor(props) {
    super(props);
    this.scrollYAnimatedValue = new Animated.Value(0);
  }
  render() {
    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT,HEADER_MIN_HEIGHT ],
        extrapolate: 'clamp'
      });

    return (
      <View style={styles.mainContainer} >
        <ScrollView
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}>
           {this.props.com}
         
        </ScrollView>

        <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: '#FF8900' }]}>
        <View style={styles.headerContainer}>
            <View style={styles.iconStyle}>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.move()}>
              <Icon name='arrow-left' size={25} color='#F6F7F8' />
           </TouchableOpacity>
            <Image source={i20} style={{width: 40, height: 40, borderRadius:15,paddingVertical:7}}/>
            </View>
            <View style={{flex:4}}> 
          <Text style={styles.textStyle} >{this.props.title}</Text>
     
             </View>
           </View>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    headerContainer:{
      flex:1,
     
      
      
  },
  iconStyle:{
      flex:1,
      paddingTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'stretch',
      top:0,
      right:0,
      paddingEnd:15,
      paddingStart:15,
      
  },
  textStyle:{
      fontSize:45,
      fontStyle:'normal',
      textAlign:'center',
      textDecorationStyle:'double',
      fontWeight:'bold',
      textAlignVertical:'center',
      color:'#F6F7F8'
  },
    mainContainer: {
      flex: 1,
      justifyContent: "center",

    },
    animatedHeaderContainer: {
      position: 'absolute',
      flexDirection:'row',
      top: (Platform.OS == 'ios') ? 20 : 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
  });
