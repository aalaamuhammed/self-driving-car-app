import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {setState} from 'expect/build/jestMatchersObject';
import {Button, Text, Block,Loading} from '_atoms';
import SnackBar from 'react-native-snackbar-component';
import * as Animatable from 'react-native-animatable';

import {theme, apis} from '../../constants';
import axios from 'axios';
 const VerificationCodeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [code, set1] = useState('');
  const [first2, set2] = useState('');
  const [first3, set3] = useState('');
  const [first4, set4] = useState('');

  const [disabled, setDisabled] = useState(true);
  const [empty1, setempty1] = useState(false);


  
  const postUser = () => {
    

    if (code === '') {
      setempty1(true);
    } else {
      setLoading(true);
      setErrors(null);
    
    // navigation.navigate('Home');
    axios
      .post(apis.users_api,{
         code:code
     })
      .then(response => {
        console.log(response.data);

        navigation.navigate('Home');

     })
      .catch(error => {
        console.log('Error', error);
        setLoading(false);
        setErrors(error);
      });
    }
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
              onChangeText={val => {
                set1(val);
              }}
            />
            <TextInput
              keyboardType="numeric"
              underlineColorAndroid="#ba55d3"
              placeholder=" 0"
              name="2"
              maxLength={1}
              onChangeText={val => {
                set2(val);
              }}
            />
            <TextInput
              keyboardType="numeric"
              underlineColorAndroid="#ba55d3"
              placeholder=" 0"
              name="3"
              maxLength={1}
              onChangeText={val => {
                set3(val);
              }}
            />
            <TextInput
              keyboardType="numeric"
              underlineColorAndroid="#ba55d3"
              placeholder=" 0"
              name="4"
              maxLength={1}
              onChangeText={val => {
                set4(val);
                setDisabled(false);
              }}
            />
          </View>

          {!loading ? (
          <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
            <Button
              gradient={!disabled}
              disabledAs_Style={disabled}
              // disable={!disabled}
              onPress={() => {
                // navigation.navigate('Home');
              postUser();
              }}>
              <Text center semibold gray={disabled} white={!disabled}>
                Next
              </Text>
            </Button>
          </Block>
   ) : (
    <Loading size="large" />
  )}
{/*   
 {errors === null ? null : (
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
          )} */}


        </KeyboardAvoidingView>
      </Block>
    </Block>
  );
};
export default VerificationCodeScreen;
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
  action: {
    // height:50,
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
});
