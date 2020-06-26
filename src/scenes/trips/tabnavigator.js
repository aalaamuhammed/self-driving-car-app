import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import History from './history'
import Scheduled from './scheduled'
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react'
import {theme,apis} from '../../constants';



const topTabNav = createMaterialTopTabNavigator(
  {
    History: History,
    Scheduled: {
      screen: Scheduled,
    },
  },
  {
    tabBarPosition: 'top',
    initialRouteName:'History',
    swipeEnabled:false,

    tabBarOptions:{
      pressColor:'rgba(255,255,255,0)',
      inactiveTintColor:'gray',
      activeTintColor:'black',


      indicatorStyle:{
       
          height: '100%',
        backgroundColor:theme.colors.gray4,
        borderRadius:theme.sizes.radius
      },
      style:{
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:theme.sizes.radius,
        elevation:0,
    
        backgroundColor:'white'

        
      },
    }
  },
);
export default topTabNav;
