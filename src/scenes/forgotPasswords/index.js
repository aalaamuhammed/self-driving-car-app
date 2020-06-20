import React, {useState} from 'react';
import {
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {theme, apis} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
// import { ToastContext } from 'react-native-styled-toast'
import SnackBar from 'react-native-snackbar-component';

import {Button, Block, Input, Text, Loading} from '_atoms';

const VALID_EMAIL = 'contact@react-ui-kit.com';

const ForgotScreen = ({navigation}) => {
  const [Password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [errors, setErrors] = useState(null);
  const [Email, setEmail] = useState('');
  const [secureTextEntry, setSecureText] = useState(true);
  const [empty1, setempty1] = useState(false);
  const [empty2, setempty2] = useState(false);
  // handleForgot() {
  //   const { navigation } = this.props;
  //   const { email } = this.state;
  //   const errors = [];

  //   Keyboard.dismiss();
  //   this.setState({ loading: true });

  //   // check with backend API or with some static data
  //   if (email !== VALID_EMAIL) {
  //     errors.push("email");
  //   }

  //   this.setState({ errors, loading: false });

  //   if (!errors.length) {
  //     Alert.alert(
  //       "Password sent!",
  //       "Please check you email.",
  //       [
  //         {
  //           text: "OK",
  //           onPress: () => {
  //             navigation.navigate("Login");
  //           }
  //         }
  //       ],
  //       { cancelable: false }
  //     );
  //   } else {
  //     Alert.alert(
  //       "Error",
  //       "Please check you Email address.",
  //       [{ text: "Try again" }],
  //       { cancelable: false }
  //     );
  //   }
  // }

  return (
    // <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <Block padding={[20, theme.sizes.base * 2]}>
        <Text h2 bold>
          Restore password{' '}
        </Text>
        <Block middle>
          <View style={{marginBottom: 20, padding: 5, flexDirection: 'row',}}>
            <FontAwesome name="user-o" color="#ba55d3" size={20} />

            <TextInput
              style={styles.textInput1}
              keyboardType="email-address"
              name="Email"
              placeholder="Email"
              underlineColorAndroid='#ba55d3'
              value={Email}
              onChangeText={text => {
                setEmail(text);
                setempty1(false);
              }}
            />
          </View>

          {!loading ? (
            <Block middle flex={0.1} margin={[0, theme.sizes.padding]}>
              <Button
                gradient
                onPress={() => {
                  console.log('send password to this email');
                  setLoading(true)
                }}>
                <Text center semibold white>
                  Next
                </Text>
              </Button>
            </Block>
          ) : (
            <Loading size="large" />
          )}

          <Block middle flex={0.2} margin={[0, theme.sizes.padding]}>
            <Button onPress={() => navigation.navigate('Login')}>
              <Text gray caption center>
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
    // </KeyboardAvoidingView>
  );
};
export default ForgotScreen;

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
  textInput1: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    marginRight: 20,
    color: '#05375a',
  },
});
