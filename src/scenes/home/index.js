import React from 'react';
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
