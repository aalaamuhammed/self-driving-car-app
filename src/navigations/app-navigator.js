import {createBottomTabNavigator} from 'react-navigation-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import React, {Component} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from'react-native-vector-icons/SimpleLineIcons'
import i20 from '_assets/images/i20.png'

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {DrawerActions} from 'react-navigation-drawer';

import HomeScreen from '_scenes/home';
import SetAddressScreen from '_scenes/setAddress';
import AvailablePlacesScreen from '_scenes/AvailablePlaces';

import AboutScreen from '_scenes/about';
import Trips from '_scenes/trips';
import WalletScreen from '_scenes/wallet';
import OffersScreen from '_scenes/offers';
import NotificationScreen from '_scenes/notifications';
import HelpScreen from '_scenes/help';


const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};
export const NavigationDrawerStructure = ({onClick}) => (
  <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={onClick} style={{padding:10}}>
  
    <Icon name='th-list' size={30} color='#FF8900'  />
    </TouchableOpacity>
  </View>
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: <NavigationDrawerStructure navigation={navigation} />,
        headerStyle: {
          backgroundColor: 'rgba(90,0, 52, 0.1)',
        },
        headerTintColor: '#0094FC',
        header: null,
      }),
    },
    Address: {
      screen: SetAddressScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Set Address',
        headerLeft: <NavigationDrawerStructure navigation={navigation} />,
        headerStyle: {
          backgroundColor: 'rgba(90,0, 52, 0.1)',
        },
        headerTintColor: '#0094FC',
        

      }),
    },
    Places: {
      screen: AvailablePlacesScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Choose your Fav',
        headerLeft: <NavigationDrawerStructure navigation={navigation} />,
        headerStyle: {
          backgroundColor: 'rgba(90,0, 52, 0.1)',
        },
        headerTintColor: '#0094FC',
        

      }),
    },


  },
  {
    headerMode: 'none',
  },
);
const AboutStack = createStackNavigator(
  {
    About: {
      screen: AboutScreen,
      navigationOptions: ({navigation}) => ({
        title: '',
        headerLeft: <NavigationDrawerStructure navigation={navigation} />,
        headerStyle: {
          backgroundColor: 'rgba(90, 0, 52, 0.1)',
        },
        headerTintColor: '#000000',
        header: null,
      }),
    },
  },
  // {
  //   headerMode:'none'
  // }
);

const CustomDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'rgba(255, 137, 0 ,.3)',
          height: 180,
          marginBottom: 0,
          alignItems:'flex-start',
          padding:15,
          flexDirection:'row',
          alignItems:'center'
        }}> 
        <Image source={i20} style={{width:'40%', height:'100%',borderRadius:10}}/>
        <View style={{flexDirection:'column' , justifyContent:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:20,color:'gray',alignSelf:'center'}}> Mahmoud Samy</Text>
        <Text style={{fontWeight:'normal',fontSize:15,color:'gray'}}> @Ibn_Samy</Text>
        </View>
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
const AppNavigator = createDrawerNavigator(
  {
    Home:{screen: HomeStack,
    navigationOptions:{
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={30} style={{ color: tintColor }}/>)
    }},
    About:{screen: AboutStack,
      navigationOptions:{
        drawerIcon: ({ tintColor }) => (
          <Icon name="user-secret" size={30} style={{ color: tintColor }}/>)
      }},
    Help:{screen: HelpScreen,
      navigationOptions:{
        drawerIcon: ({ tintColor }) => (
          <Icon name="question" size={30} style={{ color: tintColor }}/>)
      }},
    Trips:{screen: Trips,
      navigationOptions:{
        drawerIcon: ({ tintColor }) => (
          <Icon name="taxi" size={30} style={{ color: tintColor }}/>)
      }},
    Notification:{screen: NotificationScreen,
      navigationOptions:{
        drawerIcon: ({ tintColor }) => (
          <Icon name="bell-o" size={30} style={{ color: tintColor }}/>)
      }},
    Offers: {screen: OffersScreen,
      navigationOptions:{
        drawerIcon: ({ tintColor }) => (
          <Icon name="gift" size={30} style={{ color: tintColor }}/>)
      }},
    Wallet:{screen: WalletScreen,
      navigationOptions:{
        drawerIcon: ({ tintColor }) => (
          <Icon2 name="wallet" size={30} style={{ color: tintColor }}/>)
      }},
  },
  {
    contentComponent: CustomDrawer,
  },
);
// const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
