
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
import i2 from '_assets/images/i20.png'
import Icon from 'react-native-vector-icons/FontAwesome5'

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};
class NavigationDrawerStructure extends Component {
  constructor(props) {
    super(props);
    //this.toggleDrawer=this.toggleDrawer.bind(this);


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

const HomeStack = createStackNavigator(

  {
    Home:{screen:HomeScreen,navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
       headerStyle: {
           backgroundColor: 'rgba(90, 0, 52, 0.1)',
       },
       headerTintColor: '#000000',
    }),
  },
  },
   {
     header:null
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
          height: 180,
          marginBottom: 0,
        }}>
       <ImageBackground source={i2} style={{width: '100%', height: '100%'}}/>
  
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
