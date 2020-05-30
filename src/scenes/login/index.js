import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Text, Block} from '_atoms';
import {theme, apis} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default (LoginScreen = ({navigation}) => {
  // this.hasError = this.hasError.bind(this);

  const [MobileNumber, setMobileNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [click, setClick] = useState(2);
  const [user, setUser] = useState(null);

  const checkAndDecide = () => {
    navigation.navigate('Home');
  };
  // const signInUser = async () => {
  //   axios
  //     .post(apis.users_api, {user: this.state.user})
  //     // shape of the schema
  //     //{email, password}
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(err => {
  //       console.error('Error', err);
  //     });
  // };

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

            keyboardType="numeric"
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

          {MobileNumber.includes('A') && (
            <Text accent> mobile number doesn't contain characters</Text>
          )}
        </View>
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

            placeholder="Password"
            name="Password"
          />
          <Feather name="eye-off" color="#ba55d3" size={20} />

          {Password.includes(' ') && (
            <Text accent> Password doesn't contain space </Text>
          )}
        </View>
        <Block middle flex={0.3} margin={[0, theme.sizes.padding]}>
          <Button
            gradient
            onPress={() => {
              checkAndDecide();
              // this.signInUser();
            }}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
        </Block>
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

        {/* //this.props.navigation.navigate('Home') */}
        {/* <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{textAlign: 'center', paddingTop: 5,fontSize:17}}> Sign in</Text>
        </TouchableOpacity> */}
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
    marginRight:20,
    color: '#05375a',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
