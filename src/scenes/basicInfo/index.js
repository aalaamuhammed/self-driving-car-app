import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Button, Text, Block, Input} from '_atoms';
import {theme} from '../../constants';
import * as Animatable from 'react-native-animatable';

export default (BasicInfo = ({navigation, changeState}) => {
  const [city, setCity] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [empty1, setempty1] = useState(false);
  const [empty2, setempty2] = useState(false);
  const [empty3, setempty3] = useState(false);
  const [empty4, setempty4] = useState(false);

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSignUp = () => {
    const errors_ = [];

    Keyboard.dismiss();

    setLoading(true);
    // check with backend API or with some static data
    if (!city) errors.push('city');
    if (!username) errors.push('username');
    if (!country) errors.push('country');
    setErrors(errors_);
    setLoading(true);
    if (!errors_.length) {
      Alert.alert(
        'Success!',
        'Your account has been created',
        [
          {
            text: 'Continue',
            onPress: () => {
              navigation.navigate('Browse');
            },
          },
        ],
        {cancelable: false},
      );
    }
  };

  const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
  return (
    <>
      <Block padding={[20, theme.sizes.base]}>
        <Block padding={[0, theme.sizes.base]}>
          <Text h1 bold>
            Sign Up
          </Text>
          <Block middle>
            <View style={{marginBottom: 15}}>
              <TextInput
                keyboardType="default"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                onChangeText={text => {
                  setUsername(text);
                  setempty1(false);
                }}
                placeholder="Full Name"
                underlineColorAndroid={
                  empty1 ? 'red' : username === '' ? 'gray' : '#ba55d3'
                }
              />
              {empty1 && (
                <Animatable.View animation="bounceIn">
                  <Text accent> ** Required</Text>
                </Animatable.View>
              )}
            </View>

            <View style={{marginBottom: 15}}>
              <TextInput
                keyboardType="default"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                value={country}
                onChangeText={text => {
                  setCountry(text);
                  setempty2(false);
                }}
                placeholder="Country"
                underlineColorAndroid={
                  empty2 ? 'red' : country === '' ? 'gray' : '#ba55d3'
                }
              />
              {empty2 && (
                <Animatable.View animation="bounceIn">
                  <Text accent> ** Required</Text>
                </Animatable.View>
              )}
            </View>

            <View style={{marginBottom: 15}}>
              <TextInput
                keyboardType="default"
                value={city}
                onChangeText={text => {
                  setCity(text);
                  setempty3(false);
                }}
                maxLength={30}
                multiline={false}
                placeholder="City"
                underlineColorAndroid={
                  empty3 ? 'red' : city === '' ? 'gray' : '#ba55d3'
                }
              />
              {empty3 && (
                <Animatable.View animation="bounceIn">
                  <Text accent> ** Required</Text>
                </Animatable.View>
              )}
            </View>

            <View style={{marginBottom: 30}}>
              <TextInput
                underlineColorAndroid={
                  empty4 ? 'red' : address === '' ? 'gray' : '#ba55d3'
                }
                value={address}
                onChangeText={text => {
                  setAddress(text);
                  setempty4(false);
                }}
                placeholder="Address"
                name="Address"
                onBlur={() => setDisabled(true)}
              />
              {empty4 && (
                <Animatable.View animation="bounceIn">
                  <Text accent> ** Required</Text>
                </Animatable.View>
              )}
            </View>

            <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
              <Button
                disabled={!disabled}
                gradient={disabled}
                onPress={() => {
                  if (
                    username === '' ||
                    city === '' ||
                    country === '' ||
                    address === ''
                  ) {
                    if (username === '') {
                      setempty1(true);
                    }

                    if (country === '') {
                      setempty2(true);
                    }
                    if (city === '') {
                      setempty3(true);
                    }
                    if (address === '') {
                      setempty4(true);
                    }
                  } else {
                    navigation.navigate('PhoneNumber');
                  }
                }}>
                <Text center h3 semibold gray={!disabled} white={disabled}>
                  Next
                </Text>
              </Button>
            </Block>

            <Text style={{textAlign: 'center', color: '#242a37'}}>
              Need Support?
            </Text>
          </Block>
        </Block>
      </Block>
    </>
  );
});

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
    marginBottom: 30,
  },
  signup: {
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
});
