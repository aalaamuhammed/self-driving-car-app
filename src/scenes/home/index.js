import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
  PixelRatio,
  Animated,
  PanResponder,
} from 'react-native';
import {Button, Block, Text} from '_atoms';

import useGlobalState from '../../utils/globalState';
import {RenderCars, RenderStars, RenderFavourites, CarOrders} from '_molecules';
import ImageZoom from 'react-native-image-pan-zoom';
import {PermissionsAndroid} from 'react-native';
import {theme} from '../../constants';
import axios from 'axios';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon_ from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({currentPosition, parkings, navigation}) => {
  const [clicked, setClicked] = useState(1);
  const [startRide, setStartRide] = useState(false);
  const [selectCar, setSelectCar] = useState(false);
  const [rateTrip, setRateTrip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useGlobalState('count');
  const [move, setMove] = useState(true);
  const [enableMarker, setEnableMarker] = useState(false)
  const [userLocation, setUserLocation] = useState({
    xCord: null,
    yCord: null,
  });
  const [targetLocation, setTargetLocation] = useState({
    xCord: null,
    yCord: null,
  });
  const [markerClicks, setMarkerClicks] = useState(0)
  const [markerMovementEnable, setMarkerMovementEnable] = useState(true)
  const changeState = clicked => {
    setClicked(clicked);
  };
  const sendLocation = async evt => {
    axios
      .post('barq-api.herokuapp.com/api/makeRides', {
        userId: '5ebfd70e02641d53ec21d1e8',
        userLocation: {
          xCord: evt.locationX,
          yCord: evt.locationY,
        },
        targetLocation: {
          xCord: 794,
          yCord: 618,
        },
      })
      .then(response => {
        console.log('response', response.data);
      })
      .catch(err => {
        console.error('Error', err);
      });
  };
  const markerPosition = new Animated.ValueXY({x:0,y:150})
  const panResponder = 
    PanResponder.create({
      onMoveShouldSetPanResponder: () => markerMovementEnable,
      onPanResponderGrant: () => {
        markerPosition.setOffset({
          x: markerPosition.x._value,
          y: markerPosition.y._value,
        });
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: markerPosition.x, dy: markerPosition.y},
      ]),

      onPanResponderRelease: (e, gesture) => {
        markerPosition.flattenOffset();
        console.log('onPanResponderRelease',e.nativeEvent,'  "" event" ::', gesture,' """ gesture""::');
      },
    
    })
  

  const fadeAnim = new Animated.Value(1)
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500
    }).start();
  };

  return (
    <View style={{flex: 1}}>
      <NavigationDrawerStructure
        onClick={() => {
          navigation.toggleDrawer();
        }}
      />

      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={500}
        imageHeight={450}
        style={{flex: 1}}
        enableCenterFocus={true}
        minScale={2}
        maxScale={2}
        useNativeDriver={true}
        doubleClickInterval={0}
        centerOn={{x: 0, y: 0, scale: 2}}
        onMove={(p)=>{
          console.log(p)
          
        }}
        onLongPress={evt => {
          console.log(evt);
          if(markerClicks===0){
            setUserLocation({x:evt.locationX,y:evt.locationY})
            setMarkerMovementEnable(false)
              setMarkerClicks(1)}
          if(markerClicks===1){
            setTargetLocation({x:evt.locationX,y:evt.locationY})
          }
          
          
        }}
        onClick={evt => {
          //  markerPosition.setValue({x: evt.locationX, y: evt.locationX});
          console.log('Long Pressssssssssssssssssssssssss');
          console.log(evt);
          console.log(
            'AB3AAD',
            PixelRatio.getPixelSizeForLayoutSize(494),
            PixelRatio.getPixelSizeForLayoutSize(420),
          );
          console.log(
            'X',
            PixelRatio.getPixelSizeForLayoutSize(evt.locationX),
            'Y',
            PixelRatio.getPixelSizeForLayoutSize(evt.locationY),
          );
          //  markerPosition.setValue({x: evt.positionX, y: evt.positionY});
          //console.log(p)
          //  console.log(markerPosition, 'makerPosition');
        }}>
        <Image
          style={{width: 494, height: 420, alignSelf: 'center'}}
          source={require('_assets/images/realMap.png')}
        />
      </ImageZoom>
     { <Animated.View
     //   {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          width: 200,
          height: 150,
         
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',

          //  top:80,
          // right:60,
         
          transform: [
            {translateX: markerPosition.x},
            {translateY: markerPosition.y},
          ],
        }}>
      <Animated.View style={{opacity:fadeAnim}}>
         <TouchableOpacity style={{backgroundColor:'rgba(2555,255,255,.8)',borderRadius:10,padding:2}} activeOpacity={1} onPress={fadeOut}>
         <Text center black semibold >To set location kindly click long click on the marker </Text>
       </TouchableOpacity>
 
      </Animated.View>
      
       <View style={{backgroundColor: 'rgba(255, 195, 0,.6)', borderRadius: 100,alignItems:'center',justifyContent:'center',height:50,width:50}} >
       <Icon name="location" size={40} />
       </View>
    
      </Animated.View>}
     {(!enableMarker)? <View style={{position:'absolute',bottom:80,alignSelf:'center',width:200}}>
      
       <Button style={{padding:10}} onPress={()=>setEnableMarker(true)} >
      <Text center gray semibold >Set Your Location</Text>

        </Button> 
     </View>:null}

      {clicked === 1 ? (
        <View
          style={{
            position: 'absolute',
            width: 60,
            height: 300,
            borderRadius: 100,
            top: 135,
            right: 0,
            borderRadius:50,
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor:'rgba(255,255,255,.3)',
            paddingVertical:10
            
          }}>
          <View
            style={{backgroundColor: '#33A689', padding: 1, borderRadius: 80,justifyContent:'center'}}>
            <Icon_ name="home" size={35} style={{color: 'white',margin:5}} />
          </View>
          <View
            style={{backgroundColor: '#765A8F', padding: 1, borderRadius: 80,justifyContent:'center'}}>
            <Icon_ name="briefcase" size={35} style={{color: 'white',margin:5}} />
          </View>
          <View
            style={{backgroundColor: '#FEC300', padding: 1, borderRadius: 80,justifyContent:'center'}}>
            <Icon_ name="cart" size={35} style={{color: 'white',margin:5}} />
          </View>
          <View
            style={{backgroundColor: '#2C4088', padding: 1, borderRadius: 80,justifyContent:'center'}}>
            <Icon_ name="plus-circle" size={35} style={{color: 'white',margin:5}} />
          </View>
        </View>
      ) : clicked === 3 ? (
        <RenderStars changeState={changeState} />
      ) : clicked === 5 ? (
        <RenderCars changeState={changeState} />
      ) : clicked === 7 ? (
        <CarOrders changeState={changeState} />
      ) : (
        <RenderCars changeState={changeState} />
      )}
    </View>
  );
};

export default HomeScreen;
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
