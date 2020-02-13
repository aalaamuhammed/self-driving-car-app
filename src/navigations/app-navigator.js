import {createBottomTabNavigator} from 'react-navigation-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { createStackNavigator } from "react-navigation-stack";
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
import { DrawerActions } from 'react-navigation-drawer';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import Trips from '_scenes/trips';
import WalletScreen from '_scenes/wallet';
import OffersScreen from '_scenes/offers';
import NotificationScreen from '_scenes/notifications'
import HelpScreen from '_scenes/help'

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};
export const NavigationDrawerStructure = ({onClick}) => (
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={onClick}>
      <Image
        source={require('_assets/images/i1.jpg')}
        style={{width: 45, height: 45, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  </View>
);

const HomeStack = createStackNavigator(

  {
    Home:{screen:HomeScreen,navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
       headerStyle: {
           backgroundColor: 'rgba(90,0, 52, 0.1)',
       },
       headerTintColor: '#0094FC',
       header: null,

    }),
  },
  },
  {
    headerMode:'none'
  }
)
const AboutStack = createStackNavigator(

  {
    About:{screen:AboutScreen,navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
       headerStyle: {
           backgroundColor: 'rgba(90, 0, 52, 0.1)',
       },
       headerTintColor: '#000000',
    }),
  },
  },
  // {
  //   headerMode:'none'
  // }
)

const CustomDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#0094FC',
          height: 180,
          marginBottom: 0,flexDirection:'row-reverse'
        }}>
           <Image
          source={require('_assets/images/i2.jpg')}
          style={{
            width: '15%',
            height: '18%',
          }}></Image>
          {/* <TouchableOpacity style={{width:40,height:40,backgroundColor:'white',borderRedius:26,          justifyContent:'center',alignItems:'center'
}}>

          </TouchableOpacity> */}
      
         
      </View>

      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};
const RouteConfigs = {
  HomeStack,
  AboutStack,
};
const AppNavigator = createDrawerNavigator({
  Home:HomeStack,
   About: AboutStack,
   Help:HelpScreen,
  Trips,
  Notification:NotificationScreen,
  Offers:OffersScreen,
  Wallet : WalletScreen
},{
  contentComponent: CustomDrawer,
},

)
// const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
