import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, TextInput,AsyncStorage, TouchableOpacity} from 'react-native';
import {Button, Block, Text} from '_atoms';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {theme, apis} from '../../constants';

const deviceStorage = {
  
    async saveItem(key, value) {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    }
    
  };