import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableOpacity,
  PixelRatio,
  Animated,
} from 'react-native';
import {Button, Block, Text,Marker,Modal} from '_atoms';
import useGlobalState from '../../utils/globalState';
import {RenderCars, RenderStars, CarOrders,Instructions,FavPlacesRightMenu,TripRoute} from '_molecules';
import ImageZoom from 'react-native-image-pan-zoom';
import {theme, apis} from '../../constants';
import axios from 'axios';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';
const HomeScreen = ({currentPosition, parkings, navigation}) => {
 // const [clicked, setClicked] = useState(0);
  const [startRide, setStartRide] = useState(false);
  const [selectCar, setSelectCar] = useState(false);
  const [rateTrip, setRateTrip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useGlobalState('clicked');
  const [addressesList, setAddressList] = useGlobalState('addressesList')

  const [move, setMove] = useState(true);
  const [currentLocation, setCurrentLocation] = useState({
    xCord: null,
    yCord: null,
  });
  const [targetLocation, setTargetLocation] = useState({
    xCord: null,
    yCord: null,
  });
  const [markerMovementEnable, setMarkerMovementEnable] = useState(true);
  const [tripResponse, setTripResponse] = useState({
    currentResponse: '',
    targetResponse: '',
  });
  const [name, setName] = useState('');
  const [currentLocationDetails, setCurrentLocationDetails] = useState({
    place: '',
    street: '',
  });
  const [targetLocationDetails, setTargetLocationDetails] = useState({
    place: '',
    street: '',
  });
  const [modalMsg, setModalMsg] = useState([
    'Your current location is set Successfully',
    'Your target location is set Successfully'


  ])
  const [i, setI] = useState(0)
  const [visible, setVisible] = useState(false)
  const [badReq, setBadReq] = useState(false)

  const changeState = clicked => {
    setClicked(clicked);
  };
  const sendLocation = async  => {
    axios
      .post('barq-api.herokuapp.com/api/makeRides', {
        userId: '5ebfd70e02641d53ec21d1e8',
        userLocation: {
          place: currentLocationDetails.place,
          street: currentLocationDetails.street,
        },
        targetLocation: {
          place: targetLocationDetails.place,
          street: targetLocationDetails.street,
        },
      })
      .then(response => {
        console.log('response', response.data);
      })
      .catch(err => {
        console.error('Error', err);
      });
  };
  console.log(addressesList,'hahahaha')
  const tripRoutAnim = new Animated.Value(1);
  const translateComponent = () => {
    // Will change fadeAnim value to 0 in 5 seconds

    Animated.timing(tripRoutAnim, {
      toValue: 0,
      duration: 1000,
    }).start();
  };
  
  const getLocation = (responseData, x,y) => {
    const diffArray = [];
    const rangeYDiff=Math.abs(responseData[0].maxYRange-responseData[0].minYRange)
    const rangeXDiff=Math.abs(responseData[0].maxXRange-responseData[0].minXRange)
    if(clicked===0){
    if (responseData.length >1 ) {
     
      if (rangeYDiff>rangeXDiff){
        for(let i=0;i<responseData.length;i++){
          diffArray[i] = Math.abs(y - responseData[i].yCord);
        }
        var minYVal = diffArray.reduce(function(a, b) {
          return Math.min(a, b);
      });
        
        
        const minIndex=diffArray.indexOf(minYVal)
        console.log('length>1,Y',minIndex,minYVal)

         setCurrentLocationDetails({
           place: responseData[minIndex].place,
           street: responseData[minIndex].street,
         })
         console.log('length>1,Y',currentLocationDetails)
        
      }else{
        for(let i=0;i<responseData.length;i++){
          diffArray[i] = Math.abs(x - responseData[i].xCord);
        }
        var minXVal = diffArray.reduce(function(a, b) {
          return Math.min(a, b);
      });
        const minIndex=diffArray.indexOf(minXVal)
        setCurrentLocationDetails({
          place: responseData[minIndex].place,
          street: responseData[minIndex].street,
        })
        console.log('length>1,X',currentLocationDetails)
     
    }} else {
      setCurrentLocationDetails({
        place: responseData[0].place,
        street: responseData[0].street,
      });
      console.log('length===1',currentLocationDetails)
    }
  }
  if(clicked===1){
    if (responseData.length >1 ) {
     
      if (rangeYDiff>rangeXDiff){
        for(let i=0;i<responseData.length;i++){
          diffArray[i] = Math.abs(y - responseData[i].yCord);
        }
        var minXVal = diffArray.reduce(function(a, b) {
          return Math.min(a, b);
      });
        const minIndex=diffArray.indexOf(minXVal)
        setTargetLocationDetails({
          place: responseData[minIndex].place,
          street: responseData[minIndex].street,
        })
        console.log('length>1,Y',targetLocationDetails)
        
      }else{
        for(let i=0;i<responseData.length;i++){
          diffArray[i] = Math.abs(x - responseData[i].xCord);
        }
        var minXVal = diffArray.reduce(function(a, b) {
          return Math.min(a, b);
      });
        const minIndex=diffArray.indexOf(minXVal)
        setTargetLocationDetails({
          place: responseData[minIndex].place,
          street: responseData[minIndex].street,
        })
        console.log('length>1,X',targetLocationDetails)
     
    }} else {
      setTargetLocationDetails({
        place: responseData[0].place,
        street: responseData[0].street,
      });
      console.log('length===1',targetLocationDetails)
    }

  }};
  const checkLocation = async evt => {
    const x = PixelRatio.getPixelSizeForLayoutSize(evt.locationX);
    const y = PixelRatio.getPixelSizeForLayoutSize(evt.locationY);
    const i=0;
    let newX=x/2.3;
    let newY=y/2.2
    console.log('at res X', x, 'Y', y);
    const url = apis.places_api + `?xCord=${x}&yCord=${y}`;
    axios
      .get(url)
      .then(response => {
        setI(0)
      //  console.log(response.data)
 for(let i=0;i<response.data.length;i++)      
{          console.log(response.data[i].xCord, response.data[i].yCord, response.data[i].place, response.data[i].street)
}
          getLocation(response.data,newX,newY);
      })
      .catch(err => {
        setBadReq(true)
        setI(1)
        console.log('Error', err);
      });
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
        longPressTime={800}
        centerOn={{x: 0, y: 0, scale: 2}}
        onLongPress={evt => {
          console.log(clicked)
          if (clicked === 0) {
            setName('current');
            setVisible(false)
            checkLocation(evt);
            setClicked(1);
            setVisible(true)
          } else if (clicked === 1) {
            setVisible(false)
            checkLocation(evt);
            setName('target');
            setVisible(true)
            translateComponent();
            setTimeout(() => {
              setClicked(2);
            }, 1600);
          }
        }}>
        <Image
          style={{width: 494, height: 420, alignSelf: 'center'}}
          source={require('_assets/images/realMap.png')}
        />
      </ImageZoom>
        <Instructions i={i} badReq={badReq}/>
        {/* <Marker/> */}
       {clicked < 3 ?  <FavPlacesRightMenu tripRoutAnim={tripRoutAnim} navigation={navigation}/>  : null}
       {/* {clicked <3  ? <RenderCars/>: null} */}

       {clicked === 2 ? translateComponent() : null}
       {/* {clicked <3 ? <TripRoute currentLocationDetails={currentLocationDetails} targetLocationDetails={targetLocationDetails} tripRoutAnim={tripRoutAnim}/> : null}     */}
       {(visible)?<Modal/>:null}
       
       {/* : clicked === 3 ? (
        <RenderStars changeState={changeState} />
     ):
       clicked === 5 ? (
        <RenderCars changeState={changeState} />
      ) : clicked === 7 ? (
        <CarOrders changeState={changeState} />
      ) : (
        <RenderCars changeState={changeState} />
      )}  */}
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
