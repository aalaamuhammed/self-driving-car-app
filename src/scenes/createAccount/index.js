import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Block, Text} from '_atoms';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {theme, apis} from '../../constants';
import deviceStorage from '../../services/deviceStorage'; 

// import validation from 'validation.js'

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
const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const complexPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export default (CreateAccountScreen = ({navigation}) => {
  const firstRender = useRef(true);
  const [click, setClick] = useState(0);
  const [Upper, setUpper] = useState(false);
  const [Email, setEmail] = useState('');
  const [number, setNumber] = useState(false);
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Confirmed, setConfirmed] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [alphabet, setAlphabet] = useState(false);
  const [correct_email, setCorrect_email] = useState(false);
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

  const validConfirmedPassword = () => {
    var Confirmed_ = false;
    if (Password === confirmPassword || confirmPassword === '') {
      Confirmed_ = false;
    } else {
      Confirmed_ = true;
      setDisabled(true);
    }
    if (Confirmed_) {
      setConfirmed(!Confirmed_);
      setDisabled(true);

      return false;
    } else {
      setConfirmed(!Confirmed_);
      setDisabled(false);

      return true;
    }
  };

  const validPassword = () => {
    var specialCharacters_ = false,
      Upper_ = false,
      number_ = false;

    if (
      Password.includes('!') ||
      Password.includes('@') ||
      Password.includes('#') ||
      Password.includes('$') ||
      Password.includes('%') ||
      Password.includes('^') ||
      Password.includes('&') ||
      Password.includes('*') ||
      Password.includes('+') ||
      Password.includes('-') ||
      Password.includes('<') ||
      Password.includes('>') ||
      Password.includes('£') ||
      Password.includes('/') ||
      Password.includes('~') ||
      Password === ''
    ) {
      console.log('ok');
      specialCharacters_ = false;
    } else {
      specialCharacters_ = true;
    }

    // if (Password.includes('A') || Password === '') {
    //   console.log('ok');
    //   Upper_ = false;
    // } else {
    //   Upper_ = true;
    // }

    if (
      Password.includes('1') ||
      Password.includes('2') ||
      Password.includes('3') ||
      Password.includes('4') ||
      Password.includes('5') ||
      Password.includes('6') ||
      Password.includes('7') ||
      Password.includes('8') ||
      Password.includes('9') ||
      Password.includes('0') ||
      Password === ''
    ) {
      console.log('ok');
      number_ = false;
    } else {
      number_ = true;
    }

    // if (number_ || specialCharacters_) {
    //   console.log('there is a mistake he should not navigate');

    //   // setUpper(Upper_);
    //   setSpecialCharacters(specialCharacters_);
    //   setNumber(number_);
    //   return false;
    // } else {
    //   console.log('there is a No mistake he should navigate');
    //   // setUpper(Upper_);
    //   setSpecialCharacters(specialCharacters_);
    //   setNumber(number_);

    //   return true;
    // }

    if(complexPasswordRegex.test(Password)){
      // it's a valid password
          setSpecialCharacters(false);
            setNumber(false);
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
    var correct_email_ = false;

    if (emailRegex.test(Email)) {
      console.log('ok');
      setCheck_textInputChange(true);

      correct_email_ = false;
    } else {
      correct_email_ = true;
      setCheck_textInputChange(false);
    }

    if (correct_email_) {
      console.log('there is a mistake he should not navigate');
      setCorrect_email(correct_email_);

      return false;
    } else {
      console.log('there is a No mistake he should navigate');
      setCorrect_email(correct_email_);

      console.log('after cheeeeck');
      return true;
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
    const x = validPassword() && validEmail() && validConfirmedPassword();
    if (
      Confirmed === true ||
      correct_email === true ||
      specialCharacters === true ||
      number === true ||
      Email === '' ||
      Password === '' ||
      confirmPassword === ''
    ) {
      return;
    } else {
      navigation.navigate('BasicInfo');
    }
  };

  return (
    <>
      <Block padding={[20, theme.sizes.base * 2]}>
        <Text h2 bold>
          Create Account
        </Text>
        {/* {(Email!==''&&Password!==''&& confirmPassword!=='') ? this.setState({disabled:true}):this.setState({disabled:false}) } */}
        {/* this.setState({disabled:true})   */}

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
              autoCorrect={false}
              multiline={false}
              placeholder="Email"
              underlineColorAndroid={
                correct_email ? 'red' : Email === '' ? 'gray' : '#ba55d3'
              }
              onBlur={validEmail}
              value={Email}
              onChangeText={val => {
                textInputChange(val);
                setempty1(false);
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

          {correct_email && (
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
              <Text accent>
                {' '}
                ** Password should contain at least one special Character{' '}
              </Text>
            </Animatable.View>
          )}
          {/* {Upper && (
            <Text accent>
              {' '}
              ** Password should contain at least one Upper case Character{' '}
            </Text>
          )} */}
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
                setempty3(false);

                validConfirmedPassword();
              }}
              style={styles.textInput}
              // onBlur={validConfirmedPassword}
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
          <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
            <Button
              gradient={disabled}
              disabled={!disabled}
              onPress={() => {
                move();
                //  checkEmailExistence();
              }}>
              <Text center semibold gray={!disabled} white={disabled}>
                Create Account
              </Text>
            </Button>
          </Block>

          {/* <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('Terms')}>
          <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>
            Create account
          </Text>
        // </TouchableOpacity> */}

          <Text style={{textAlign: 'center', color: '#242a37'}}>
            Need Support?
          </Text>
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
