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
export default class VerifyCode extends Component {
  constructor(props) {
    super(props);
    this._home = this._home.bind(this);
    this.state = {
      click: 1,
      top: 0,
      user: null, // user we used to post new user it must be array of [
    };
  }
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

  render() {
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
                underlineColorAndroid="#0094FC"
                placeholder=" 0"
                name="1"
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                underlineColorAndroid="#0094FC"
                placeholder=" 0"
                name="2"
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                underlineColorAndroid="#0094FC"
                placeholder=" 0"
                name="3"
                maxLength={1}
              />
              <TextInput
                keyboardType="numeric"
                underlineColorAndroid="#0094FC"
                placeholder=" 0"
                name="4"
                maxLength={1}
              />
            </View>

            <Text style={{color: '#0094FC', textAlign: 'center'}}>
              Resend code
            </Text>

            <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
              <Button
                gradient
                onPress={() => {
                  this.props.navigation.navigate('Home');
                  //this.postUser()
                }}>
                <Text center semibold white>
                  Next
                </Text>
              </Button>
            </Block>

            {/* <TouchableOpacity style={styles.buttonContainer2} onPress={()=>this.props.navigation.navigate('Home')}>
   <Text style={{textAlign:'center',  paddingTop:5,color:'white'}}>Next</Text>
  </TouchableOpacity>   */}
          </KeyboardAvoidingView>
        </Block>
      </Block>
    );
  }
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
    alignItems: 'center',
  },
});
