import React from 'react';
import {View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

 
 
export default class HomeScreen extends React.Component {
  state = {
    currentLongitude: 37.78825,//Initial Longitude
    currentLatitude: 22.4324,//Initial Latitude
 }
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
    return (
      <MapView
      style={{flex:1}}
      initialRegion={{
        latitude: this.state.currentLatitude,
        longitude: this.state.currentLongitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
    )
 }
}
const styles = StyleSheet.create ({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
 },
 boldText: {
    fontSize: 30,
    color: 'red',
 }
})
