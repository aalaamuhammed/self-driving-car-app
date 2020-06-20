import React,{useState} from 'react'
import { View, Text,Animated,TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import Icon_ from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../constants'
const instructions = ({i,badReq}) => {
   const [instructionList, setInstructionList] = useState([
    'To set location kindly press longly on it.',
    'please set location inside block not on the street'
   ])
   const [fadeOutCalling, setFadeOutCalling] = useState(true)
   const fadeAnim = new Animated.Value(0);
    if(i===1){
       fadeAnim.setValue(0);
    }
   const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start();

    setTimeout(() => {
      console.log(i,fadeOutCalling,'fadeOut',fadeAnim)


    }, 500);
  };

        return (
          <Animated.View
            style={{
              position: 'absolute',
              top: 100,
              left: 0,
              width: 300,
              transform: [
                {
                  translateX: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -310],
                  }),
                },
              ],
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(2555,255,255,.8)',
                borderRadius: 10,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={1}
              onPress={()=>{fadeOut();
              }}>
              {(!badReq)?
                <View style={{flexDirection: 'row'}}>
                <Animatable.Text
                  animation="pulse"
                  style={{alignSelf: 'center', fontSize: 15}}>
                  Have a nice time{' '}
                </Animatable.Text>
                <Icon_
                  name={'heart'}
                  size={20}
                  style={{color: theme.colors.primary}}
                />
              </View>:null
              }
              <Animatable.Text
                animation="pulse"
                style={{alignSelf: 'center', fontSize: 15}}>
               { `${instructionList[i]}`}
              </Animatable.Text>
            </TouchableOpacity>
          </Animated.View>
        );
      };
    


export default instructions
