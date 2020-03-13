import React from 'react';
import {View, StyleSheet,ActivityIndicator} from 'react-native';
import {RenderCars, RenderStars, RenderFavourites,CarOrders} from '_molecules';
import Geolocation from '@react-native-community/geolocation';
import MapView, {
  Animated,
  AnimatedRegion,
  ProviderPropType,
} from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import {theme} from '../../constants';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);

    this.state = {
      // currentLongitude: 30.98825, //Initial Longitude
      // currentLatitude: 30.7324, //Initial Latitude
      clicked: 1,
      startRide: false,
      selectCar: false,
      rateTrip: false,
      isloading: true,
      latitude: 33.5,
      longitude: 33.5,

      location: new AnimatedRegion({
        latitude: 33,
        longitude: 33,
      }),
    };
  }
  changeState = clicked => {
    this.setState({clicked: clicked});
  };
  async componentDidMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        this.callLocation();
      } else {
        alert('Permission Denied');
      }
    } catch (err) {
      alert('err', err);
      console.warn(err);
    }
  }

  callLocation() {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        //getting the Longitude from the location json
        //getting ssthe Latitude from the location json
        this.setState({
          location: {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          },
          isloading: false,
        });
        console.log(this.state.location);
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    this.watchID = Geolocation.watchPosition(position => {
      //Will give you the location on location change
      //getting the Longitude from the location json
      //getting the Latitude from the location json
      this.setState({
        location: {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        },
      });
    });
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
  };
  render() {
    const {currentPosition, parkings} = this.props;
    console.log(this.state.location);

    return (
      (this.state.isloading)? 
     <ActivityIndicator size="small" color="#90ff10" />
     :
      <View style={{flex: 1}}>
        <NavigationDrawerStructure
          onClick={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <Animated
          style={{flex: 1}}
          region={{
            latitude:this.state.location.latitude,
            longitude:this.state.location.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
        />
        

       { this.state.clicked === 1 ? (
          <RenderFavourites
            navigation={this.props.navigation}
            changeState={this.changeState}
          />
        ) : this.state.clicked === 3 ? (
          <RenderStars changeState={this.changeState} />
        ) : this.state.clicked === 5 ? (
          <RenderCars changeState={this.changeState} />
        ) :  this.state.clicked === 7 ? (
          <CarOrders changeState={this.changeState} />
        ):<RenderCars changeState={this.changeState} />}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
