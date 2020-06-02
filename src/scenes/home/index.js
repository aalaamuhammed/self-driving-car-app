import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  PixelRatio,
  Animated,
  PanResponder,
} from 'react-native';
import {Button, Block, Text} from '_atoms';
import useGlobalState from '../../utils/globalState';
import {RenderCars, RenderStars, CarOrders} from '_molecules';
import ImageZoom from 'react-native-image-pan-zoom';
import {theme} from '../../constants';
import axios from 'axios';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon_ from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Octicons';

import * as Animatable from 'react-native-animatable';

const HomeScreen = ({currentPosition, parkings, navigation}) => {
  const [clicked, setClicked] = useState(0);
  const [startRide, setStartRide] = useState(false);
  const [selectCar, setSelectCar] = useState(false);
  const [rateTrip, setRateTrip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useGlobalState('count');
  const [move, setMove] = useState(true);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [enableInstruction, setEnableInstruction] = useState(true);
  const [currentLocation, setCurrentLocation] = useState({xCord: null,yCord: null,});
  const [targetLocation, setTargetLocation] = useState({xCord: null,yCord: null});
  const [markerMovementEnable, setMarkerMovementEnable] = useState(true);
  const [tripResponse, setTripResponse] = useState({currentResponse: '',targetResponse: ''});
  const [name, setName] = useState('') 
 
 
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
  const markerPosition = useRef(new Animated.ValueXY(0, 0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        markerPosition.setOffset({
          x: markerPosition.x._value,
          y: markerPosition.y._value,
        });
      },
      onPanResponderMove: (evt, gesture) => {
        markerPosition.setValue({x: gesture.dx, y: gesture.dy});
        console.log(evt.nativeEvent.locationX, evt.nativeEvent.pageX, 'maker');
      },
      onPanResponderRelease: () => {
        markerPosition.flattenOffset();
      },
    }),
  ).current;

  const setYourLocationButton = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 80,
          alignSelf: 'center',
          width: 200,
        }}>
        <Button style={{padding: 10}} onPress={() => setEnableMarker(true)}>
          <Text center gray semibold>
            Set Your Location
          </Text>
        </Button>
      </View>
    );
  };

  const markerComponent = () => {
    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',

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
        <View
          style={{
            backgroundColor: 'rgba(255, 195, 0,.6)',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
          }}>
          <Icon name="location" size={40} />
        </View>
      </Animated.View>
    );
  };
  const instructionComponent = () => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 100,
          left: 0,
          width: 300,
          transform: [
            {
              translateX: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -310],
              }),
            },
          ],
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(2555,255,255,.8)',
            borderRadius: 10,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPress={fadeOut}>
          <View style={{flexDirection: 'row'}}>
            <Animatable.Text
              animation="pulse"
              style={{alignSelf: 'center', fontSize: 15}}>
              Have a nice time{' '}
            </Animatable.Text>
            <Icon_
              name={'heart'}
              size={20}
              style={{color: theme.colors.primary}}
            />
          </View>
          <Animatable.Text
            animation="pulse"
            style={{alignSelf: 'center', fontSize: 15}}>
            To set location kindly press longly on it.
          </Animatable.Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const rightMenu = () => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          width: 60,
          height: 300,
          borderRadius: 100,
          top: Dimensions.get('window').height / 4,
          right: 0,
          borderRadius: 50,
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,.3)',
          paddingVertical: 10,
          opacity:tripRoutAnim
        }}>
        <View
          style={{
            backgroundColor: '#33A689',
            padding: 1,
            borderRadius: 80,
            justifyContent: 'center',
          }}>
          <Icon_
            name="home"
            size={35}
            style={{color: 'white', margin: 5}}
            onPress={() => navigation.navigate('Address')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#765A8F',
            padding: 1,
            borderRadius: 80,
            justifyContent: 'center',
          }}>
          <Icon_
            name="briefcase"
            size={35}
            style={{color: 'white', margin: 5}}
            onPress={() => navigation.navigate('Address')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#FEC300',
            padding: 1,
            borderRadius: 80,
            justifyContent: 'center',
          }}>
          <Icon_
            name="cart"
            size={35}
            style={{color: 'white', margin: 5}}
            onPress={() => navigation.navigate('Address')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#2C4088',
            padding: 1,
            borderRadius: 80,
            justifyContent: 'center',
          }}>
          <Icon_
            name="plus-circle"
            size={35}
            style={{color: 'white', margin: 5}}
            onPress={() => navigation.navigate('Places')}
          />
        </View>
      </Animated.View>
    );
  };
  const settingLocationInteractionModal = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisibility}>
        <View
          style={{
            backgroundColor: 'rgba(67, 39, 110,.5)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Icon2
              name="verified"
              size={150}
              color="#F6F7F8"
              style={{alignSelf: 'center'}}
            />

            <Text center h2 regular white>
             { `Your ${name} location is set Successfully`}
            </Text>
            {ModalVisibility_()}
          </View>
        </View>
      </Modal>
    );
  };

  const fadeAnim = new Animated.Value(0);
  const tripRoutAnim=new Animated.Value(1);
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start();
    setTimeout(() => {
      setEnableInstruction(false);
    }, 500);
  };
  const translateComponent = () => {
    // Will change fadeAnim value to 0 in 5 seconds

    Animated.timing(tripRoutAnim, {
      toValue: 0,
      duration: 1000,
    }).start();
  };


  const tripRoute = () => {
    return (
      <Animated.View style={{
        position: 'absolute',
        margin: 20,
        alignSelf: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        
       top: Dimensions.get('window').height / 2.3,
        transform: [
        {
          translateY: tripRoutAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [30,Dimensions.get('window').height],
          }),
        },
      ]}}>
      <Block card>
        <Block card color="rgba(255,255,255,.8)" style={{justifyContent:'space-evenly'}}>
          <Block flex={0.23} row style={{justifyContent: 'space-between'}}>
            <Block
              row
              card
              flex={0.5}
              color={theme.colors.white}
              style={{marginTop: 5, marginLeft: 10, width: 150}}>
              <Block
                flex={0.38}
                center
                middle
                color={theme.colors.gray4}
                style={{
                  borderRadius: 100,
                  margin: 5,
                  marginVertical: 5,
                  padding: 1,
                }}>
                <Icon_
                  name="taxi"
                  size={30}
                  style={{color: theme.colors.primary}}
                />
              </Block>
              <Block middle style={{}}>
                <Text regular title>
                  Ride Path
                </Text>
              </Block>
            </Block>
            <Block flex={0.25} center middle>
              <TouchableOpacity onPress={()=>{
                setClicked(0)
               tripRoutAnim.setValue(1)}}>
                 <Icon_
                name={'autorenew'}
                size={30}
                color={theme.colors.primary}
              />
              </TouchableOpacity>
             
            </Block>
          </Block>

          <Block
            flex={0.65}
            row
            
            style={{margin: 5}}>
            <Block
              color={theme.colors.white}
              card
              style={{marginHorizontal: 5}}>
              <Text center title regular color="gray">
                From:
              </Text>
              <Text>{}</Text>
            </Block>
            <Block
              card
              color={theme.colors.white}
              style={{marginHorizontal: 5}}>
              <Text center title regular color="gray">
                To:
              </Text>
            </Block>
          </Block>
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
          <Button gradient>
            <Text center semibold white>
              confirm
            </Text>
          </Button>
        </Block>
      </Block>

      </Animated.View>
    );
  };

  const ModalVisibility_ = () => {
    setTimeout(() => {
      setModalVisibility(false);
    }, 1500);
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
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
        doubleClickInterval={0}
        maxOverflow={0}
        centerOn={{x: 0, y: 0, scale: 2}}
        onLongPress={evt => {
          console.log(evt.locationX, evt.locationY);
          if (clicked===0) {
            console.log('Long PRess Current Location');
            setCurrentLocation({xCord:evt.locationX,yCord:evt.locationY}) //store location in current Location
            setName('current')
            setModalVisibility(true)
           
            setClicked(1);
     
            //response  failed --> reset succuss -->call modal with verification
            // setTripResponse({
            //   ...
            //   currentResponse:response.data
            // })
          } else if(clicked===1) {
            setTargetLocation({xCord:evt.locationX,yCord:evt.locationY})  //store target in userLocation
            //request for check the all location
            setName('target')
            setModalVisibility(true)   
            translateComponent()         
            //response  failed --> reset succuss -->call modal with verification
            setTimeout(() => {
              setClicked(2);
              


            }, 1600);
          }
        }}
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
      {enableInstruction?instructionComponent():null}
      {modalVisibility?settingLocationInteractionModal():null}
     
      {
      (clicked<3)?rightMenu():null
    
    
  }
      {(clicked===2)?translateComponent():null} 
      {(clicked===2)?tripRoute():null} 

      {/* {clicked === 1 ? rightMenu()
       : clicked === 3 ? (
        <RenderStars changeState={changeState} />
     ):

     
       clicked === 5 ? (
        <RenderCars changeState={changeState} />
      ) : clicked === 7 ? (
        <CarOrders changeState={changeState} />
      ) : (
        <RenderCars changeState={changeState} />
      )} */}
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
