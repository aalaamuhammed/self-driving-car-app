import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import History from './history'
import Scheduled from './scheduled'
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'
import icons from 'react-native-vector-icons';





const AppNavigator = createStackNavigator({
    history: {
      screen: History,
    },
  })


  
  const topTab=createMaterialTopTabNavigator(
   { history : {
        screen: History
    
      },
      scheduled: {
        screen: Scheduled
      }
    },{
        tabBarPosition:'top',
        tabBarOptions: {
          style: {
           backgroundColor: '#FF8900',
           
          },
          labelStyle: {
            fontSize: 17,
            fontStyle:'italic'
          },
       
        },

    });
export default AppContainer = createAppContainer(topTab);