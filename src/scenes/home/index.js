import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text,
  Image,
  PixelRatio,
  Animated,
} from 'react-native';
import {RenderCars, RenderStars, RenderFavourites, CarOrders} from '_molecules';
import ImageZoom from 'react-native-image-pan-zoom';
//import Geolocation from '@react-native-community/geolocation';
// import MapView, {
//   Animated,
//   AnimatedRegion,
//   ProviderPropType,
// } from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import {theme} from '../../constants';
import axios from 'axios';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

const Home = ({currentPosition, parkings, navigation}) => {
  const [clicked, setClicked] = useState(1);
  const [startRide, setStartRide] = useState(false);
  const [selectCar, setSelectCar] = useState(false);
  const [rateTrip, setRateTrip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [move, setMove] = useState(true);

  const markerPosition = new Animated.ValueXY(0, 0);

  const changeState = clicked => {
    setClicked(clicked);
  };

  // pan = new Animated.ValueXY();
  // panResponder = PanResponder.create({
  // ove: Animated.event([
  //     null,
  //     { dx: pan.x, dy: pan.y }
  //   ]),
  //   onPanResponderRelease: () => {
  //     pan.flattenOffset();
  //   }
  // });

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

  return (
    //   (isloading)?
    //  <ActivityIndicator size="small" color="#90ff10" />
    //  :
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
        useNativeDriver={true}
        enableCenterFocus={true}
        minScale={2}
        maxScale={2}
        useNativeDriver={true}
        onMove={p => {
          markerPosition.setValue({x: p.positionX, y: p.positionY});
          //console.log(p)
          console.log(markerPosition, 'makerPosition');
        }}
        doubleClickInterval={0}
        centerOn={{x: 0, y: 0, scale: 2}}
        onClick={evt => {
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
        }}>
        <Image
          style={{width: 494, height: 420, alignSelf: 'center'}}
          source={require('_assets/images/realMap.png')}
        />
      </ImageZoom>
      {/*      <Animated.View 
              style={{
                position:'absolute', 
                width:80,
                height:90,
                top:80,
                right:60,
                backgroundColor:'blue',
                transform:[{translateX:markerPosition.x,
                translateY:markerPosition.y}]}} >
              <Text>hhhhhhhhhhh</Text>
              </Animated.View>
                */}

      {clicked === 1 ? (
        <RenderFavourites navigation={navigation} changeState={changeState} />
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

export default Home;
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
