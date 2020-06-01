import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import {Loading, Block, Button, Text} from '_atoms';
import {theme} from '../../constants';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import deviceStorage from '../../services/deviceStorage.js';
import WelcomeScreen from '_scenes/welcome';
// import HomeScreen from '_scenes/home';
import OffersScreen from '_scenes/offers';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

import VerificationCodeScreen from '_scenes/verificationCode';

const WhereToGoScreen = ({navigation}) => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let Token;

      try {
        Token = await AsyncStorage.getItem('id_token');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setUserToken(Token);
      setLoading(false);
    };

    bootstrapAsync();
  }, []);

  return (
   
      //  <Block center flex={1} color="#43276E">
      //   <Text h1 center bold white>
      //     Your Taxi
      //   </Text>
        
      //   <Text h3 white style={{marginTop: theme.sizes.padding / 2}}>
      //     Enjoy the experience.
      //   </Text>
      // </Block> 

      (userToken === null) ? (
        <View style={styles.container}>
        <StatusBar backgroundColor="#43276E" barStyle="light-content" />
  
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('_assets/images/brq.png')}
            style={{width: 350, height: 350}}
            resizeMode="stretch"
          />
        </View>
        <WelcomeScreen navigation={navigation}/>
        </View>

        ) : userToken !== null ? (
          <VerificationCodeScreen navigation={navigation}/>
          
      ):
      <Loading/>
      

  );
};

export default WhereToGoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43276E',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input2: {
    height: 40,
    borderColor: '#7a42f4',
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
  },
});

// {(loading === true) ? (
//   <Loading size={'large'} />
// ) : userToken === null ? (
//   <WelcomeScreen navigation={navigation}/>
// ) : userToken !== null ? (
// <VerificationCodeScreen navigation={navigation}/>
// ) : (
//   <Loading  size={'large'}/>
// )
// }

// useEffect(() => {

//     const value =  AsyncStorage.getItem('id_token');
//     if (value !== null) {
//      setUserToken(value)
//         setLoading(false)
//     } else {
//         setLoading(false)

//     }
// }
