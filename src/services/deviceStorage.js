import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, TextInput,AsyncStorage, TouchableOpacity} from 'react-native';
import {Button, Block, Text} from '_atoms';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

 
    const deviceStorage = {

      
      async saveKey(key, valueToSave) {
        try {
          await AsyncStorage.setItem(key, valueToSave);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
    
      async loadJWT() {
        
        try {
          const value = await AsyncStorage.getItem('id_token');
          if (value !== null) {
            return 2;
            // this.setState({
            //   jwt: value,
            //   loading: false
            // });
          } else {
            return 3;
            // this.setState({
            //   loading: false
            // });
          }
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
    
      async deleteJWT() {
        try{
          await AsyncStorage.removeItem('id_token')
          .then(
            () => {
              this.setState({
                jwt: ''
              })
            }
          );
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
    };
    
  export default deviceStorage;