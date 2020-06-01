import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Text, Block,Loading} from '_atoms';
import {theme, apis} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

export default (LoginScreen = ({navigation}) => {
  const [MobileNumber, setMobileNumber] = useState('');
  const [Password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [errors, setErrors] = useState('');
  const [Email, setEmail] = useState('');
  const [secureTextEntry, setSecureText] = useState(true);
  const [empty1, setempty1] = useState(false);
  const [empty2, setempty2] = useState(false);

  const updateSecureTextEntry = () => {
    setSecureText(!secureTextEntry);
  };

  const checkAndDecide = () => {
    navigation.navigate('Home');
    signInUser();
  };
  const signInUser = () => {

    if (MobileNumber === '') {
      setempty1(true);
    }

    if (Password === '') {
      setempty2(true);
    }
    setLoading(true);
    setErrors('');
    axios
      .post('https://reqres.in/api/login', {
        email: MobileNumber,
        password: Password,
      })
      .then(response => {
        console.log(response.data.token);
        deviceStorage.saveKey('id_token', response.data.token);
        setUserToken(response.data.token);
        navigation.navigate('Home');

      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setErrors('Registration Failed');
        // Handle returned errors here
      });
   
     
  };

  return (
    <Block padding={[20, theme.sizes.base * 2]}>
      <Text h1 bold>
        Login
      </Text>
      <Block middle>
        <View style={{marginBottom: 10, padding: 5, flexDirection: 'row'}}>
          <FontAwesome name="user-o" color="#ba55d3" size={20} />

          <TextInput
            style={styles.textInput1}
            keyboardType="email-address"
            name="Mobile"
            placeholder="Mobile Number"
            underlineColorAndroid={
              MobileNumber.includes('A') ? 'red' : '#ba55d3'
            }
            value={MobileNumber}
            onChangeText={text => {
              setMobileNumber(text);
            }}
          />
                  </View>

          {empty1 && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Required</Text>
            </Animatable.View>
          )}

          {MobileNumber.includes('A') && (
                          <Animatable.View animation="bounceIn">

            <Text accent> mobile number doesn't contain characters</Text>
            </Animatable.View>

          )}
        <View style={{marginBottom: 10, padding: 5, flexDirection: 'row'}}>
          <Feather name="lock" color="#ba55d3" size={20} />

          <TextInput
            style={styles.textInput}
            value={Password}
            onChangeText={text => {
              setPassword(text);
            }}
            underlineColorAndroid={Password.includes(' ') ? 'red' : '#ba55d3'}
            // secureTextEntry={true}
            secureTextEntry={secureTextEntry ? true : false}

            placeholder="Password"
            name="Password"
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
              {secureTextEntry ? (
                <Feather name="eye-off" color="#ba55d3" size={20} />
              ) : (
                <Feather name="eye" color="#ba55d3" size={20} />
              )}
            </TouchableOpacity>
            </View>
            {empty2 && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Required</Text>
            </Animatable.View>
          )}

          {Password.includes(' ') && (
              <Animatable.View animation="bounceIn">
            <Text accent> Password doesn't contain space </Text>

              </Animatable.View>
          )}
        {!loading ? (
        <Block middle flex={0.3} margin={[0, theme.sizes.padding]}>
          <Button
            gradient
            onPress={() => {
              // checkAndDecide();
           signInUser();
            }}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
        </Block>
         ) : (
          <Loading />
        )}
        <TouchableOpacity
          style={{marginBottom: 30}}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text
            gray
            caption
            center
            size={15}
            style={{textDecorationLine: 'underline'}}>
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <Text
          style={{textAlign: 'center', color: '#242a37'}}
          onPress={() => {
            navigation.navigate('Address');
          }}>
          {' '}
          Need Support?
        </Text>
      </Block>
    </Block>
  );
});

const styles = StyleSheet.create({
  buttonContainer2: {
    backgroundColor: '#f1f2f6',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
    margin: 25,
    alignItems: 'center',
    marginBottom: 60,
  },
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  hasError: {
    backgroundColor: 'red',
  },
  textInput1: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    marginRight: 20,
    color: '#05375a',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
