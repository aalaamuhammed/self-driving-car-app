import React, {Component} from 'react';
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
const email_validation_url = 'http://192.168.1.3:3000/api/validateEmail';
export default class CreateAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.move = this.move.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validConfirmedPassword = this.validConfirmedPassword.bind(this);
    this.state = {
      click: 0,
      Email: '',
      Password: '',
      alphabet: false,
      correct_email: false,
      specialCharacters: false,
      Upper: false,
      number: false,
      confirmPassword: '',
      Confirmed: false,
      disabled: false,
      email_existence: false,
    };
  }
  validConfirmedPassword() {
    this.setState({disabled: true});
    var Confirmed = false;
    if (
      this.state.Password === this.state.confirmPassword ||
      this.state.confirmPassword === ''
    ) {
      Confirmed = false;
    } else {
      Confirmed = true;
    }
    if (Confirmed) {
      this.setState({Confirmed});
      return false;
    } else {
      this.setState({Confirmed});
      return true;
    }
  }

  validPassword() {
    var specialCharacters = false,
      Upper = false,
      number = false;

    if (this.state.Password.includes('!') || this.state.Password === '') {
      console.log('ok');
      specialCharacters = false;
    } else {
      specialCharacters = true;
    }

    if (this.state.Password.includes('A') || this.state.Password === '') {
      console.log('ok');
      Upper = false;
    } else {
      Upper = true;
    }

    if (this.state.Password.includes('3') || this.state.Password === '') {
      console.log('ok');
      number = false;
    } else {
      number = true;
    }

    if (number || Upper || specialCharacters) {
      console.log('there is a mistake he should not navigate');
      this.setState({
        Upper: Upper,
        specialCharacters: specialCharacters,
        number: number,
      });
      return false;
    } else {
      console.log('there is a No mistake he should navigate');
      this.setState({
        Upper: Upper,
        specialCharacters: specialCharacters,
        number: number,
      });

      return true;
    }
  }
  checkEmailExistence = async () => {
    axios
      .post(apis.email_validation_api, {email: this.state.Email})
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error('Error', err);
        this.setState({email_existence: true});
      });
  };

  validEmail = async () => {
    var correct_email = false;

    if (this.state.Email.includes('@')) {
      console.log('ok');
      correct_email = false;
    } else {
      correct_email = true;
    }

    if (correct_email) {
      console.log('there is a mistake he should not navigate');
      this.setState({correct_email: correct_email});

      return false;
    } else {
      console.log('there is a No mistake he should navigate');
      this.setState({correct_email: correct_email});

      console.log('after cheeeeck');
      return true;
    }
  };

  move = () => {
    const x =
      this.validPassword() &&
      this.validEmail() &&
      this.validConfirmedPassword();
    if (x) {
      this.props.navigation.navigate('BasicInfo');
    }
  };
  render = () => {
    const {Email, Password, confirmPassword} = this.state;
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
                  this.state.correct_email
                    ? 'red'
                    : this.state.Email === ''
                    ? 'gray'
                    : '#0094FC'
                }
                onBlur={this.validEmail}
                value={this.state.Email}
                onChangeText={text => {
                  this.setState({Email: text});
                }}
              />

              {this.state.alphabet && (
                <Text accent>please check your mail</Text>
              )}
              {this.state.correct_email && (
                <Text accent> ** Please check your mail</Text>
              )}
              {this.state.email_existence && (
                <Text accent> ** Your E-mail already exist</Text>
              )}
            </View>
            <View style={{marginBottom: 20}}>
              <TextInput
                // secureTextEntry={true}
                value={this.state.Password}
                onChangeText={text => {
                  this.setState({Password: text});
                }}
                onBlur={this.validPassword}
                underlineColorAndroid={
                  this.state.number ||
                  this.state.Upper ||
                  this.state.specialCharacters
                    ? 'red'
                    : this.state.Password === ''
                    ? 'gray'
                    : '#0094FC'
                }
                secureTextEntry={true}
                placeholder="Password"
                name="Password"
              />
              {this.state.specialCharacters && (
                <Text accent>
                  {' '}
                  ** Password should contain at least one special Character{' '}
                </Text>
              )}
              {this.state.Upper && (
                <Text accent>
                  {' '}
                  ** Password should contain at least one Upper case Character{' '}
                </Text>
              )}
              {this.state.number && (
                <Text accent>
                  {' '}
                  ** Password should contain at least one number
                </Text>
              )}
            </View>
            <TextInput
              // secureTextEntry={true}
              value={this.state.confirmPassword}
              onChangeText={text => {
                this.setState({confirmPassword: text});
              }}
              onBlur={this.validConfirmedPassword}
              secureTextEntry={true}
              underlineColorAndroid={
                this.state.Confirmed
                  ? 'red'
                  : this.state.confirmPassword === ''
                  ? 'gray'
                  : '#0094FC'
              }
              placeholder="Confirm Password"
              name="Confirm Password"
            />
            {this.state.Confirmed && (
              <Text accent> ** They are not identical</Text>
            )}
            <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
              <Button
                gradient={this.state.disabled}
                disabled={!this.state.disabled}
                onPress={() => {
                  this.move();
                  this.checkEmailExistence();
                }}>
                <Text
                  center
                  semibold
                  gray={!this.state.disabled}
                  white={this.state.disabled}>
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
}
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
