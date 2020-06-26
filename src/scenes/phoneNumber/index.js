import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Text, Block, Loading} from '_atoms';
import {theme, apis} from '../../constants';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import SnackBar from 'react-native-snackbar-component';

const PhoneNumberScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [empty1, setempty1] = useState(false);

  const getCode = () => {
    if (PhoneNumber === '') {
      setempty1(true);
    } else {
      setLoading(true);
      setErrors(null);
      // navigation.navigate('VerificationCode');

      axios
        .post(apis.users_api, {
          PhoneNumber: PhoneNumber,
        })
        .then(response => {
          console.log(response.data);
          navigation.navigate('VerificationCode');
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          setErrors(error);
          // Handle returned errors here
        });
    }
  };

  return (
    <>
      <Block padding={[20, theme.sizes.base * 2]}>
        <Text h2 bold>
          Phone Number
        </Text>
        <Block middle>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                margin: 0,
                color: 'black',
                fontWeight: '600',
              }}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#ba55d3" size={20} />
            <TextInput
              // onSubmitEditing={this.props.focusNext}
              style={styles.textInput}
              keyboardType="numeric"
              underlineColorAndroid="#ba55d3"
              placeholder="Phone number"
              name="phone number"
              onChangeText={val => {
                setPhoneNumber(val);
                setempty1(false);
                setDisabled(false);
              }}
            />
          </View>
          {empty1 && (
            <Animatable.View animation="bounceIn">
              <Text accent> ** Required</Text>
            </Animatable.View>
          )}

          {!loading ? (
            <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
              <Button
                gradient={!disabled}
                disabledAs_Style={disabled}
                //  disableCantMove={disabled}

                onPress={() => {
                  // navigation.navigate('VerificationCode');
                  getCode();
                }}>
                <Text center semibold gray={disabled} white={!disabled}>
                  Verify
                </Text>
              </Button>
            </Block>
          ) : (
            <Loading size="large" />
          )}

          {errors === null ? null : (
            <Animatable.View animation="fadeInLeft">
              <SnackBar
                visible={true}
                textMessage="first"
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
          {errors === null ? null : (
            <Animatable.View animation="fadeInLeft">
              <SnackBar
                visible={true}
                textMessage="second"
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
          )}{errors === null ? null : (
            <Animatable.View animation="fadeInLeft">
              <SnackBar
                visible={true}
                textMessage="third"
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
};
export default PhoneNumberScreen;
const styles = StyleSheet.create({
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
