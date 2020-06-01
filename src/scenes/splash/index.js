import React, {useState,useEffect} from 'react';
import {StyleSheet,AsyncStorage, View, TextInput, Image, StatusBar} from 'react-native';
import {Loading} from '_atoms';
import {theme} from '../../constants';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import deviceStorage from '../../services/deviceStorage.js';
import WelcomeScreen from '_scenes/welcome';
import HomeScreen from '_scenes/home';
import OffersScreen from '_scenes/offers';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

import VerificationCodeScreen from '_scenes/verificationCode';

const SplashScreen = ({navigation}) => {
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
      setUserToken(Token)
      setLoading(false)
      
    };

    bootstrapAsync();
  }, []);

  return loading === true ? (
    <Loading size={'large'} />
  ) : userToken === null ? (
    <WelcomeScreen />
  ) : userToken !== null ? (
<HomeScreen navigation={navigation}/>
  ) : (
    <Loading  size={'large'}/>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43276E',
  },
  header: {
    flex: 2,
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

{
  /* <View style={styles.container}>
<StatusBar backgroundColor="#43276E" barStyle="light-content" />

<View style={styles.header}>
  <Animatable.Image
    animation="bounceIn"
    duraton="1500"
    source={require('_assets/images/brq.png')}
    style={{width: 350, height: 350}}
    resizeMode="stretch"
  />
</View> */
}
{
  /* <Block center flex={1} color='#43276E'> */
}
{
  /* <Text h1 center bold>
      Your Taxi 
    </Text> */
}
{
  /* <Image
          source={require('_assets/images/brq.png')}
          style={{width: 450, height: 355, resizeMode: 'contain'}}></Image> */
}

{
  /* <Text h3 gray2 style={{marginTop: theme.sizes.padding / 2}}>
      Enjoy the experience.
    </Text>
  </Block> */
}

{
  /* </View> */
}

// useEffect(() => {
    
//     const value =  AsyncStorage.getItem('id_token');
//     if (value !== null) {
//      setUserToken(value)
//         setLoading(false)
//     } else {
//         setLoading(false)

    
//     }
// }