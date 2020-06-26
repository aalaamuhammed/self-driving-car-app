import React from 'react'
import { View, Animated,Dimensions } from 'react-native'
import Icon_ from 'react-native-vector-icons/MaterialCommunityIcons';
const favPlacesRightMenu = ({navigation,tripRoutAnim}) => {
    const {height}= Dimensions.get('window');
        return (
          <Animated.View
            style={{
              position: 'absolute',
              width: 60,
              height: 300,
              borderRadius: 100,
              top: height / 4,
              right: 0,
              borderRadius: 50,
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,.3)',
              paddingVertical: 10,
              opacity: tripRoutAnim,
            }}>
            <View
              style={{
                backgroundColor: '#33A689',
                padding: 1,
                borderRadius: 80,
                justifyContent: 'center',
              }}>
              <Icon_
                name="home"
                size={35}
                style={{color: 'white', margin: 5}}
                onPress={() => navigation.navigate('Address',{id:0})}
              />
            </View>
            <View
              style={{
                backgroundColor: '#765A8F',
                padding: 1,
                borderRadius: 80,
                justifyContent: 'center',
              }}>
              <Icon_
                name="briefcase"
                size={35}
                style={{color: 'white', margin: 5}}
                onPress={() => navigation.navigate('Address',{id:1})}
              />
            </View>
            <View
              style={{
                backgroundColor: '#FEC300',
                padding: 1,
                borderRadius: 80,
                justifyContent: 'center',
              }}>
              <Icon_
                name="cart"
                size={35}
                style={{color: 'white', margin: 5}}
                onPress={() => navigation.navigate('Address',{id:2})}
              />
            </View>
            <View
              style={{
                backgroundColor: '#2C4088',
                padding: 1,
                borderRadius: 80,
                justifyContent: 'center',
              }}>
              <Icon_
                name="plus-circle"
                size={35}
                style={{color: 'white', margin: 5}}
                onPress={() => navigation.navigate('Places')}
              />
            </View>
          </Animated.View>
        );
      };
    


export default favPlacesRightMenu
