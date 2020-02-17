import React from 'react';
<<<<<<< HEAD
import {View, Text,ActivityIndicator,StyleSheet, Image,Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView,{Animated,AnimatedRegion} from 'react-native-maps';
import {PermissionsAndroid} from 'react-native'; 
export default class HomeScreen extends React.Component {
  state = {
        isloading:true,
        
        location:new AnimatedRegion({
          latitude:null,
          longitude:null,    
        })
      
 }
 
 async componentDidMount () {   
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
          'title': 'Location Access Required',
          'message': 'This App needs to Access your location'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        this.callLocation();
      } else {
        alert("Permission Denied");
      }
    } catch (err) {
      alert("err",err);
      console.warn(err)
    }
   }    
  
  callLocation(){
    Geolocation.getCurrentPosition(
       //Will give you the current location
        (position) => {
           //getting the Longitude from the location json
           //getting the Latitude from the location json
           this.setState({ location:{longitude:position.coords.longitude,
                           latitude:position.coords.latitude},
                           isloading:false });
                 console.log(this.state.location)
        },
        (error) => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
     );
     this.watchID = Geolocation.watchPosition((position) => {
       //Will give you the location on location change
         //getting the Longitude from the location json
         //getting the Latitude from the location json
         this.setState({ location:{longitude:position.coords.longitude,
          latitude:position.coords.latitude}});
     });
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }  

  componentWillUnmount = () => {
     Geolocation.clearWatch(this.watchID);
  }
 render() {
   return(
     (this.state.isloading)? 
     <ActivityIndicator size="small" color="#90ff10" />
   
   :
   <Animated
   style={{flex:1}}
   region={{
     latitude:this.state.location.latitude,
     longitude:this.state.location.longitude,
     latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
   }}
 />
    
   )}}


const styles = StyleSheet.create ({
 container: {
=======
import {View, StyleSheet} from 'react-native';
import {RenderCars, RenderStars, RenderFavourites} from '_molecules';
import MapView, {ProviderPropType} from 'react-native-maps';
import {theme} from '../../constants';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);

    this.state = {
      currentLongitude: 30.98825, //Initial Longitude
      currentLatitude: 30.7324, //Initial Latitude
      clicked: 1,
      startRide: false,
      selectCar: false,
      rateTrip: false,
    };
  }
  changeState = clicked => {
    this.setState({clicked: clicked});
  };

  render() {
    const {currentPosition, parkings} = this.props;

    return (
      <View style={{flex: 1}}>
        <NavigationDrawerStructure
          onClick={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
            latitudeDelta: .002922,
            longitudeDelta: .00221,
          }}></MapView>

        {this.state.clicked === 1 ? (
          <RenderFavourites 
          navigation={this.props.navigation}
          changeState={this.changeState} />
        ) : this.state.clicked === 3 ? (
          <RenderStars changeState={this.changeState} />
        ) : this.state.clicked === 5 ? (
          <RenderCars changeState={this.changeState} />
        ) : (
          <RenderCars changeState={this.changeState} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
>>>>>>> origin/master
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
    backgroundColor: 'black',
  },

  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
