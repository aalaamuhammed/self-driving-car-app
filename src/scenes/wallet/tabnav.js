import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Payment from './payment'
import Transaction from './transaction'
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'
import icons from 'react-native-vector-icons';





const AppNavigator = createStackNavigator({
    payment: {
      screen: Payment,
    },
  })


  
  const topTab=createMaterialTopTabNavigator(
   {  payment: {
    screen: Payment,
  },
      transaction: {
        screen: Transaction
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