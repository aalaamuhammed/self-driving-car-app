import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {setState} from 'expect/build/jestMatchersObject';
import {Button, Text, Block} from '_atoms';
import {theme, apis} from '../../constants';
import axios from 'axios';
export default (VerifyCode = ({navigation}) => {
  

  _home = () => {
    // this.props.navigation.navigate('Home');
    console.log('finished');
  };
  postUser = async () => {
    axios
      .post(apis.users_api, {user: this.state.user})
      // shape of the schema
      //[   "username",
      //   "email",
      //   "password",
      //   "dateOfBirth",
      //   "phone",
      //   "address",
      //   "image",
      // ]
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error('Error', err);
      });
  };

    return (
      <Block padding={[20, theme.sizes.base * 2]}>
        <Text h2 bold>
          Verification Code
        </Text>
        <Block marginTop={70}>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={16 * -30}>
            <View
              style={{
                marginBottom: 70,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                keyboardType="numeric"
                underlineColorAndroid="#ba55d3"
                placeholder=" 0"
                name="1"
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                underlineColorAndroid="#ba55d3"
                placeholder=" 0"
                name="2"
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                underlineColorAndroid="#ba55d3"
                placeholder=" 0"
                name="3"
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                underlineColorAndroid="#ba55d3"
                placeholder=" 0"
                name="4"
                maxLength={1}
              />
            </View>

            <Text style={{color: '#ba55d3', textAlign: 'center'}}>
              Resend code
            </Text>

            <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
              <Button
                gradient
                onPress={() => {
                  navigation.navigate('Home');
                  //this.postUser()
                }}>
                <Text center semibold white>
                  Next
                </Text>
              </Button>
            </Block>

          </KeyboardAvoidingView>
        </Block>
      </Block>
    
  )
})
const styles = StyleSheet.create({
  buttonContainer2: {
    backgroundColor: '#242a37',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
    margin: 15,
    alignItems: 'center',
  },
});
