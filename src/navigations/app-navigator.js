<<<<<<< HEAD
=======
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
>>>>>>> origin/master

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
<<<<<<< HEAD
import NotificationScreen from '_scenes/notifications'
import i2 from '_assets/images/i20.png'
import Icon from 'react-native-vector-icons/FontAwesome5'
=======
import NotificationScreen from '_scenes/notifications';
import HelpScreen from '_scenes/help';
>>>>>>> origin/master

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
        

<<<<<<< HEAD
  }
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
  };
  render() {
    return (
      <View style={{ flexDirection: 'row',paddingHorizontal:15}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.toggleDrawer();console.log('1111111')}}>
        <Icon name={'th-list'} size={25} color='#FBA403' />
        </TouchableOpacity>
      </View>
    );
  }
}
=======
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
>>>>>>> origin/master


  },
  {
    headerMode: 'none',
  },
<<<<<<< HEAD
   {
     header:null
   }
)
=======
);
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
          backgroundColor: '#0094FC',
>>>>>>> origin/master
          height: 180,
          marginBottom: 0,
          flexDirection: 'row-reverse',
        }}>
<<<<<<< HEAD
       <ImageBackground source={i2} style={{width: '100%', height: '100%'}}/>
  
=======
        <Image
          source={require('_assets/images/i2.jpg')}
          style={{
            width: '15%',
            height: '18%',
          }}></Image>
        {/* <TouchableOpacity style={{width:40,height:40,backgroundColor:'white',borderRedius:26,          justifyContent:'center',alignItems:'center'
}}>

          </TouchableOpacity> */}
>>>>>>> origin/master
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
<<<<<<< HEAD
const AppNavigator = createDrawerNavigator({
  Home:HomeStack,
 About: AboutStack,
  Trips,
  Notification:NotificationScreen,
  Offers:OffersScreen,
  Wallet : WalletScreen
},{
  contentComponent: CustomDrawer,
  
},

)
=======
const AppNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    About: AboutStack,
    Help: HelpScreen,
    Trips,
    Notification: NotificationScreen,
    Offers: OffersScreen,
    Wallet: WalletScreen,
  },
  {
    contentComponent: CustomDrawer,
  },
);
>>>>>>> origin/master
// const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
