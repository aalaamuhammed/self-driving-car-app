import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Block, Text, Loading} from '_atoms';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {theme, apis} from '../../constants';
import deviceStorage from '../../services/deviceStorage';
import SnackBar from 'react-native-snackbar-component';

const validation = {
  email: {
    presence: {
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },

  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
};
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const complexPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default (CreateAccountScreen = ({navigation}) => {
  const firstRender = useRef(true);
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [errors, setErrors] = useState(null);

  const [Upper, setUpper] = useState(false);
  const [Email, setEmail] = useState('');
  const [number, setNumber] = useState(false);
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Confirmed, setConfirmed] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [alphabet, setAlphabet] = useState(false);
  const [wrong_email, setwrong_email] = useState(false);
  const [email_existence, setEmail_existence] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [secureTextEntry, setSecureText] = useState(true);
  const [confirm_secureTextEntry, setConfirmSecureText] = useState(true);
  const [check_textInputChange, setCheck_textInputChange] = useState(false);
  const [empty1, setempty1] = useState(false);
  const [empty2, setempty2] = useState(false);
  const [empty3, setempty3] = useState(false);

  const textInputChange = val => {
    if (val.length !== 0) {
      setEmail(val);
      // setCheck_textInputChange(true);
    } else {
      setEmail(val);
      // setCheck_textInputChange(false);
    }
  };

  const validConfirmedPassword = async () => {
    if (Password === confirmPassword) {
      setConfirmed(false);
      setDisabled(false);

      return true;
    } else {
      setConfirmed(true);

      setDisabled(true);
      return false;
    }
  };

  const validPassword = async () => {
    if (complexPasswordRegex.test(Password)) {
      // it's a valid password
      setSpecialCharacters(false);
      setNumber(false);
      setUpper(false);
    } else {
      setSpecialCharacters(true);
      setNumber(true);
      setUpper(true);
    }
  };
  const updateSecureTextEntry = () => {
    setSecureText(!secureTextEntry);
  };
  const updateConfirmSecureTextEntry = () => {
    setConfirmSecureText(!confirm_secureTextEntry);
  };
  const checkEmailExistence = async () => {
    axios
      .post(apis.email_validationn_api, {email: Email})
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error('Error', err);
        setEmail_existence(true);
      });
  };

  const validEmail = async () => {
    if (emailRegex.test(Email)) {
      console.log('there is a No mistake he should navigate');

      setCheck_textInputChange(true);
      setwrong_email(false);
      return true;
    } else {
      console.log('there is a mistake he should not navigate');

      setCheck_textInputChange(false);
      setwrong_email(true);

      return false;
    }
  };

  const move = () => {
    if (Email === '') {
      setempty1(true);
    }

    if (Password === '') {
      setempty2(true);
    }
    if (confirmPassword === '') {
      setempty3(true);
    }
    // const x = validPassword()
    // const y= validEmail()
    // const z= validConfirmedPassword();
    // if (
    //   Confirmed === true ||
    //   wrong_email === true ||
    //   specialCharacters === true ||
    //   number === true ||
    //   Email === '' ||
    //   Password === '' ||
    //   confirmPassword === ''
    // ) {
    //   return;
    // }

    if (empty1 !== true && empty2 !== true && empty3 !== true) {
      setLoading(true);
      setErrors(null);
      axios
        .post('https://reqres.in/api/register', {
          email: Email,
          password: Password,
        })
        .then(response => {
          console.log(response.token);
          deviceStorage.saveKey('id_token', response.token);
          setUserToken(response.token);
          navigation.navigate('BasicInfo');
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          setErrors(error);

          // Handle returned errors here
        });
    } else {
      return;
    }
  };

  return (
    <>
      <Block padding={[20, theme.sizes.base * 2]}>
        <Text h2 bold>
          Create Account
        </Text>

        <Block middle>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              // onSubmitEditing={this.props.focusNext}
              style={styles.textInput}
              onFocus={res => {
                console.log(res.key, ' is focus');
              }}
              keyboardType="email-address"
              multiline={false}
              placeholder="Email"
              underlineColorAndroid={
                wrong_email ? 'red' : Email === '' ? 'gray' : '#ba55d3'
              }
              onBlur={validEmail}
              value={Email}
              onChangeText={val => {
                textInputChange(val);
                setempty1(false);
                validEmail();
              }}
            />
            {!check_textInputChange ? null : (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#ba55d3" size={20} />
              </Animatable.View>
            )}
          </View>

          {empty1 && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Required</Text>
            </Animatable.View>
          )}

          {alphabet && (
            <Animatable.View animation="bounceIn">
              <Text accent>please check your email</Text>
            </Animatable.View>
          )}

          {wrong_email && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Please check your email</Text>
            </Animatable.View>
          )}

          {email_existence && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Your E-mail already exist</Text>
            </Animatable.View>
          )}

          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              value={Password}
              onChangeText={text => {
                setPassword(text);
                validPassword();
                setempty2(false);
              }}
              style={styles.textInput}
              onBlur={validPassword}
              underlineColorAndroid={
                number || specialCharacters
                  ? 'red'
                  : Password === ''
                  ? 'gray'
                  : '#ba55d3'
              }
              secureTextEntry={secureTextEntry ? true : false}
              placeholder="Password"
              name="Password"
            />

            <TouchableOpacity onPress={updateSecureTextEntry}>
              {secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
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

          {specialCharacters && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Password must be at least 8 characters </Text>
            </Animatable.View>
          )}

          {specialCharacters && (
            <Animatable.View animation="bounceIn">
              <Text accent>
                {' '}
                ** Password should contain at least one special Character{' '}
              </Text>
            </Animatable.View>
          )}
          {Upper && (
            <Text accent>
              {' '}
              ** Password should contain at least one Upper case Character{' '}
            </Text>
          )}
          {number && (
            <Animatable.View animation="bounceIn">
              <Text accent>
                {' '}
                ** Password should contain at least one number
              </Text>
            </Animatable.View>
          )}
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              // secureTextEntry={true}
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
                validConfirmedPassword();
                setempty3(false);

              }}
              style={styles.textInput}
               onBlur={validConfirmedPassword}
              secureTextEntry={confirm_secureTextEntry ? true : false}
              underlineColorAndroid={
                Confirmed ? 'red' : confirmPassword === '' ? 'gray' : '#ba55d3'
              }
              placeholder="Confirm Password"
              name="Confirm Password"
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="#ba55d3" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {empty3 && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Required</Text>
            </Animatable.View>
          )}

          {Confirmed && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** They are not identical</Text>
            </Animatable.View>
          )}

          {!loading ? (
            <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
              <Button
                gradient={!disabled}
                disabledAs_Style={disabled}
                onPress={() => {
                  move();
                  //  checkEmailExistence();
                }}>
                <Text center semibold gray={disabled} white={!disabled}>
                  Create Account
                </Text>
              </Button>
            </Block>
          ) : (
            <Loading size="large" />
          )}

          {/* <Text style={{textAlign: 'center', color: '#242a37',}}>
            Need Support?
          </Text> */}

          {errors === null ? (
            <Text gray3 caption center />
          ) : (
            //   <Text  gray
            //   caption
            // center>{errors}</Text>
            <Animatable.View animation="fadeInLeft">
              <SnackBar
                visible={true}
                textMessage="Error"
                actionHandler={() => {
                  console.log('snackbar button clicked!');
                }}
                actionText="Try Again"
                backgroundColor="#D8D8D9"
                containerStyle={{borderRadius: 10}}
                accentColor="#ba55d3"
                messageColor="#ba55d3"
              />
            </Animatable.View>
          )}
        </Block>
      </Block>
    </>
  );
});

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  buttonContainer2: {
    backgroundColor: '#242a37',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
    margin: 15,
    marginBottom: 39,
    alignItems: 'center',
  },
});
