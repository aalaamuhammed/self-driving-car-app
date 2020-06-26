import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';
import {RenderTerms} from '_molecules';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const WelcomeScreen = ({navigation}) => {
  const [showTerms1, setShowTerms1] = useState(false);
  // constructor(props) {
  //   super(props);
  //   this._signInAsync = this._signInAsync.bind(this);
  //   this._reg = this._reg.bind(this);
  //   this.changeState = this.changeState.bind(this);

  //   this.state = {
  //     click: 0,
  //     top: 0,
  //     showTerms1: false,
  //   };
  // }
  changeState = showTerms1 => {
    setShowTerms1(showTerms1);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#43276E" barStyle="light-content" />

      {/* <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('_assets/images/brq.png')}
          style={{width: 350, height: 350}}
          resizeMode="stretch"
        />
      </View> */}
      {/* <Block center flex={1} color='#43276E'> */}
      {/* <Text h1 center bold>
            Your Taxi 
          </Text> */}
      {/* <Image
                source={require('_assets/images/brq.png')}
                style={{width: 450, height: 355, resizeMode: 'contain'}}></Image> */}

      {/* <Text h1 primary>
            {' '}
            Blue.
          </Text> */}
      {/* <Text h3 gray2 style={{marginTop: theme.sizes.padding / 2}}>
            Enjoy the experience.
          </Text>
        </Block> */}
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: 'white',
          },
        ]}
        animation="fadeInUpBig">
        <Block middle flex={0.5} margin={[50, theme.sizes.padding * 1]}>
          <Button gradient 
          
          onPress={() => navigation.navigate('Home')}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button
            shadow
            color={'#F0F0F0'}
            // gray
            onPress={() => navigation.navigate('CreateAccount')}>
            <Text center gray semibold>
              Create Account
            </Text>
          </Button>
        </Block>

        <TouchableOpacity
        style={{marginTop:35}}
          onPress={() => {
            setShowTerms1(true);
            console.log('showTerms' + showTerms1);
          }}>
          <Text center caption gray>
            Terms of service
          </Text>
        </TouchableOpacity>
      </Animatable.View>

      {showTerms1 && <RenderTerms changeState={changeState} />}
    </View>
  );
};

export default WelcomeScreen;

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
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  // logo: {
  //     width: height_logo,
  //     height: height_logo
  // },
  input2: {
    height: 40,
    borderColor: '#7a42f4',
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
  },
  button: {
    backgroundColor: '#242a37',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
    width: 250,
    marginBottom: 20,
  },

  button2: {
    backgroundColor: '#f1f2f6',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
    width: 250,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 260,
    borderColor: '#ffffff',
    textAlign: 'center',
    color: 'black',
    paddingTop: 5,
  },
});
