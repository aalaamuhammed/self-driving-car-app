import {createBottomTabNavigator} from 'react-navigation-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/AntDesign';
import i20 from '_assets/images/i20.png';
import {theme} from '../constants'
import {Text,Block} from '../components/atoms'


import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {DrawerActions} from 'react-navigation-drawer';

import HomeScreen from '_scenes/home';
import SetAddressScreen from '_scenes/setAddress';
import AvailablePlacesScreen from '_scenes/AvailablePlaces';
import SettingScreen from '_scenes/setting'
import AboutScreen from '_scenes/about';
import LogoutScreen from '_scenes/logout';

import Trips from '_scenes/trips';
import WalletScreen from '_scenes/wallet';
import OffersScreen from '_scenes/offers';
import NotificationScreen from '_scenes/notifications';
import HelpScreen from '_scenes/help';
import ProfileScreen from '_scenes/profile';

// const TabNavigatorConfig = {
//   initialRouteName: 'Home',
//   header: null,
//   headerMode: 'none',
// };
export const NavigationDrawerStructure = ({onClick}) => (
  <View style={{flexDirection: 'row', backgroundColor:'rgba(0,0,0,.1)'}}>
    <TouchableOpacity onPress={onClick} style={{padding: 10}}>
      <Iconn name="menuunfold" size={30} color={theme.colors.primary} />
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
  const data1=[
    {route:'Home',icon:'home',id:0,color:theme.colors.primary},
    {route:'Offers',icon:'gift',id:3,color:theme.colors.primary},
    {route:'Trips',icon:'car',id:4,color:theme.colors.primary},
    {route:'Packages',icon:'tagso',id:5,color:theme.colors.primary},
    {route:'Wallet',icon:'creditcard',id:6,color:theme.colors.primary},
    {route:'Help',icon:'question',id:2,color:theme.colors.primary},
    {route:'About',icon:'infocirlceo',id:1,color:theme.colors.primary},
  ]
const data2=[
  {route:'Setting',icon:'setting',id:7,color:theme.colors.gray},
  {route:'Profile',icon:'profile',id:8,color:theme.colors.gray},
  {route:'Logout',icon:'logout',id:9,color:theme.colors.gray}
]
  const navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    props.navigation.dispatch(navigateAction);
  }
  const renderItem=({item})=>{
    return(
      <TouchableOpacity style={{flex:1,flexDirection:'row',padding:8,marginBottom:5}} onPress={navigateToScreen(item.route)}>
      <View style={{flex:.25,alignContent:'flex-start'}}>
      <Iconn name={item.icon} size={27} style={{color:item.color}}/>
      </View>
      <View style={{flex:.5,justifyContent:'center'}}>
     <Text regular black style={{fontSize:17}}>{item.route}</Text>
      </View>
      
    </TouchableOpacity>
    )

  }
  const renderItem2=({item})=>{
    return(
      <TouchableOpacity style={{flex:1,flexDirection:'row',padding:10,marginBottom:5}} onPress={navigateToScreen(item.route)}>
      <View style={{flex:.25,alignContent:'flex-start'}}>
      <Iconn name={item.icon} size={27} style={{color:item.color}}/>
      </View>
      <View style={{flex:.5,justifyContent:'center'}}>
     <Text regular content black>{item.route}</Text>
      </View>
      
    </TouchableOpacity>
    )

  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor:theme.colors.primary}}>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255 ,.6)',
          height: 150,
          
          alignItems: 'flex-start',
          padding: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={i20}
          style={{width: '35%', height: '70%', borderRadius: 100,marginLeft:10}}
        />
        <View style={{flexDirection: 'column', justifyContent: 'center', marginHorizontal:5}}>
          <Text
          regular
          h3
          black
            style={{
              alignSelf: 'center',
             
            }}>
            {' '}
            Mahmoud Samy
          </Text>
          <Text style={{fontWeight: 'normal', fontSize: 15, color: theme.colors.gray3}}>
            {'  '}
            @Ibn_Samy
          </Text>
        </View>
        </View>
      </View>
      <View style={{flex:1,marginHorizontal:20,justifyContent:'space-between'}}>
        <View style={{flex:1}}>
        <FlatList
          data={data1}
          renderItem={({item}) => renderItem({item})}
          keyExtractor={item => item.id}
        />
          </View> 
          <View style={{flex:.6 }}>
            <View style={{borderWidth:.5,borderColor:theme.colors.gray2}}></View>
            <View style={{margin:5}}>
        <FlatList
          data={data2}
          renderItem={({item}) => renderItem2({item})}
          keyExtractor={item => item.id}
        />              
            </View>

          </View> 

      </View>
    </SafeAreaView>
  );
};
const RouteConfigs = {
  HomeStack,
  AboutStack,
};
const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
     
    },
    Logout: {
      screen: LogoutScreen,
   
    },
    Setting: {
      screen: SettingScreen,
      
    },

    About: {
      screen: AboutStack,
     
    },
    Help: {
      screen: HelpScreen,
     
    },
    Trips: {
      screen: Trips,
      
    },
    Packages: {
      screen: NotificationScreen,
     
    },
    Offers: {
      screen: OffersScreen,
     
    },
    Wallet: {
      screen: WalletScreen,
     
    },
    Profile: {
      screen: ProfileScreen,
     
    },
  },
  {
    contentComponent: CustomDrawer,
    contentOptions: {
      labelStyle: {fontWeight: 'normal'},
    },
  },
);
// const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
