import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RenderCars, RenderStars, RenderFavourites} from '_molecules';
// import Geolocation from '@react-native-community/geolocation';
import MapView, {ProviderPropType} from 'react-native-maps';
import {theme} from '../../constants';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);

    this.state = {
      currentLongitude: 37.78825, //Initial Longitude
      currentLatitude: 22.4324, //Initial Latitude
      clicked: 1,
      startRide: false,
      selectCar: false,
      rateTrip: false,
    };
  }
  changeState = clicked => {
    this.setState({clicked: clicked});
  };

  //  componentDidMount = () => {
  //   var that =this;
  //   //Checking for the permission just after component loaded
  //   if(Platform.OS === 'IOS'){
  //     this.callLocation(that);
  //   }else{
  //     async function requestLocationPermission() {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
  //             'title': 'Location Access Required',
  //             'message': 'This App needs to Access your location'
  //           }
  //         )
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           //To Check, If Permission is granted
  //           that.callLocation(that);
  //         } else {
  //           alert("Permission Denied");
  //         }
  //       } catch (err) {
  //         alert("err",err);
  //         console.warn(err)
  //       }
  //     }
  //     requestLocationPermission();
  //   }
  //  }
  //  callLocation(that){
  //   //alert("callLocation Called");
  //     Geolocation.getCurrentPosition(
  //       //Will give you the current location
  //        (position) => {
  //           const currentLongitude = JSON.stringify(position.coords.longitude);
  //           //getting the Longitude from the location json
  //           const currentLatitude = JSON.stringify(position.coords.latitude);
  //           //getting the Latitude from the location json
  //           that.setState({ currentLongitude:currentLongitude });
  //           //Setting state Longitude to re re-render the Longitude Text
  //           that.setState({ currentLatitude:currentLatitude });
  //           //Setting state Latitude to re re-render the Longitude Text
  //        },
  //        (error) => alert(error.message),
  //        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //     );
  //     that.watchID = Geolocation.watchPosition((position) => {
  //       //Will give you the location on location change
  //         console.log(position);
  //         const currentLongitude = JSON.stringify(position.coords.longitude);
  //         //getting the Longitude from the location json
  //         const currentLatitude = JSON.stringify(position.coords.latitude);
  //         //getting the Latitude from the location json
  //        that.setState({ currentLongitude:currentLongitude });
  //        //Setting state Longitude to re re-render the Longitude Text
  //        that.setState({ currentLatitude:currentLatitude });
  //        //Setting state Latitude to re re-render the Longitude Text
  //     });
  //  }
  //  componentWillUnmount = () => {
  //     Geolocation.clearWatch(this.watchID);
  //  }

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
            latitudeDelta: 20.922,
            longitudeDelta: 67.421,
          }}></MapView>

        {this.state.clicked === 1 ? (
          <RenderFavourites changeState={this.changeState} />
        ) : this.state.clicked === 3 ? (
          <RenderStars changeState={this.changeState} />
        ) :  this.state.clicked===5? (
          <RenderCars changeState={this.changeState} />
        ) : 
        
        (
          <RenderCars changeState={this.changeState} />


        )
        
        }
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
