import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

import { View,  Animated,
    PanResponder } from 'react-native'


const marker = () => {
    const markerPosition = useRef(new Animated.ValueXY(0, 0)).current;
    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: () => {
            markerPosition.setOffset({
              x: markerPosition.x._value,
              y: markerPosition.y._value,
            });
          },
          onPanResponderMove: (evt, gesture) => {
            markerPosition.setValue({x: gesture.dx, y: gesture.dy});
            console.log(evt.nativeEvent.locationX, evt.nativeEvent.pageX, 'maker');
          },
          onPanResponderRelease: () => {
            markerPosition.flattenOffset();
          },
        }),
      ).current;
        return (
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              position: 'absolute',
    
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
    
              //  top:80,
              // right:60,
    
              transform: [
                {translateX: markerPosition.x},
                {translateY: markerPosition.y},
              ],
            }}>
            <View
              style={{
                backgroundColor: 'rgba(255, 195, 0,.6)',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
              }}>
              <Icon name="location" size={40} />
            </View>
          </Animated.View>
        );
      
      
    }
    

export default marker



