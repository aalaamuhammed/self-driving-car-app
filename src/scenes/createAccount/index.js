import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Block, Text} from '_atoms';
import axios from 'axios';
import {theme, apis} from '../../constants';

// import validation from 'validation.js'

const validatio = {
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
export default  CreateAccountScreen =({navigation})=>{
 
   
  const [click, setClick] = useState(0);
  const [Upper, setUpper] = useState(false);
  const [Email, setEmail] = useState(null);
  const [number, setNumber] = useState(false);
  const [Password, setPassword] = useState(null);
   const [confirmPassword, setConfirmPassword] = useState('');
   const [Confirmed, setConfirmed] = useState(false);
   const [disabled, setDisabled] = useState(false);
   const [alphabet, setAlphabet] = useState(false)
  const [ correct_email, setCorrect_email] = useState(false)
  const [email_existence, setEmail_existence] = useState(false)
  const [specialCharacters, setSpecialCharacters] = useState(false)

  
  const validConfirmedPassword=()=> {
    setDisabled(true)
    var Confirmed_ = false;
    if (
      Password ===confirmPassword ||
      confirmPassword === ''
    ) {
      Confirmed_ = false;
    } else {
      Confirmed_ = true;
    }
    if (Confirmed_) {
     
      setConfirmed(Confirmed_)
      return false;
    } else {
      setConfirmed(Confirmed_)
      return true;
    }
  }

  const validPassword=()=> {
    var specialCharacters_ = false,
      Upper_ = false,
      number_ = false;

    if (Password.includes('!') || Password === '') {
      console.log('ok');
      specialCharacters_ = false;
    } else {
      specialCharacters_ = true;
    }

    if (Password.includes('A') || Password === '') {
      console.log('ok');
      Upper_ = false;
    } else {
      Upper_ = true;
    }

    if (Password.includes('3') || Password === '') {
      console.log('ok');
      number_ = false;
    } else {
      number_ = true;
    }

    if (number_ || Upper_ || specialCharacters_) {
      console.log('there is a mistake he should not navigate');
     
      setUpper(Upper_)
      setSpecialCharacters(specialCharacters_)
      setNumber(number_)
      return false;
    } else {
      console.log('there is a No mistake he should navigate');
      setUpper(Upper_)
      setSpecialCharacters(specialCharacters_)
      setNumber(number_)

      return true;
    }
  }
  const checkEmailExistence = async () => {
    axios
      .post(apis.email_validation_api, {email: Email})
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

    if (Email.includes('@')) {
      console.log('ok');
      correct_email_ = false;
    } else {
      correct_email_ = true;
    }

    if (correct_email_) {
      console.log('there is a mistake he should not navigate');
      setCorrect_email(correct_email_)

      return false;
    } else {
      console.log('there is a No mistake he should navigate');
      setCorrect_email(correct_email_)

      console.log('after cheeeeck');
      return true;
    }
  };

  const move = () => {
    const x =
     validPassword() &&
     validEmail() &&
      validConfirmedPassword();
    // if (x) {
     navigation.navigate('BasicInfo');
    // }
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
            <View style={{marginBottom: 20}}>
              <TextInput
                // onSubmitEditing={this.props.focusNext}

                onFocus={res => {
                  console.log(res.key, ' is focus');
                }}
                keyboardType="email-address"
                autoCorrect={false}
                multiline={false}
                placeholder="Email"
                underlineColorAndroid={
                correct_email
                    ? 'red'
                    : Email === ''
                    ? 'gray'
                    : '#0094FC'
                }
                onBlur={validEmail}
                value={Email}
                onChangeText={text => {
                  setEmail(text)
                }}
              />

              {alphabet && (
                <Text accent>please check your mail</Text>
              )}
              {correct_email && (
                <Text accent> ** Please check your mail</Text>
              )}
              {email_existence && (
                <Text accent> ** Your E-mail already exist</Text>
              )}
            </View>
            <View style={{marginBottom: 20}}>
              <TextInput
                // secureTextEntry={true}
                value={Password}
                onChangeText={text => {
                  setPassword(text)
                }}
                onBlur={validPassword}
                underlineColorAndroid={
                  number ||
                  Upper ||
                  specialCharacters
                    ? 'red'
                    : Password === ''
                    ? 'gray'
                    : '#0094FC'
                }
                secureTextEntry={true}
                placeholder="Password"
                name="Password"
              />
              {specialCharacters && (
                <Text accent>
                  {' '}
                  ** Password should contain at least one special Character{' '}
                </Text>
              )}
              {Upper && (
                <Text accent>
                  {' '}
                  ** Password should contain at least one Upper case Character{' '}
                </Text>
              )}
              {number && (
                <Text accent>
                  {' '}
                  ** Password should contain at least one number
                </Text>
              )}
            </View>
            <TextInput
              // secureTextEntry={true}
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
              }}
              onBlur={validConfirmedPassword}
              secureTextEntry={true}
              underlineColorAndroid={
                Confirmed
                  ? 'red'
                  : confirmPassword === ''
                  ? 'gray'
                  : '#0094FC'
              }
              placeholder="Confirm Password"
              name="Confirm Password"
            />
            {Confirmed && (
              <Text accent> ** They are not identical</Text>
            )}
            <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
              <Button
                gradient={disabled}
                disabled={!disabled}
                onPress={() => {
                  move();
                //  checkEmailExistence();
                }}>
                <Text
                  center
                  semibold
                  gray={!disabled}
                  white={disabled}>
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
  };

const styles = StyleSheet.create({
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
