import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button,Text,Block} from '_atoms'
import {theme} from '../../constants'


export default class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this._code = this._code.bind(this);
    this.state = {
      click: 0,
      top: 0,
    };
  }

  _code() {
    this.setState({click: 6, top: 150}, () => {
      console.log('PhoneNumber');
      console.log(this.state.top);

      console.log(this.state.click);
      this.props.changeState(this.state.click, this.state.top);
    });
  }

  render() {
    return (
      <>
         <Block padding={[20, theme.sizes.base * 2]}>
          <Text h2 bold>
          Phone Number
          </Text>
          <Block middle>

     
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              margin: 25,
              marginBottom: 30,
              color: '#242a37',
              fontWeight: '600',
            }}>
          </Text>
        </View>

        <View style={{marginBottom: 30}}>
          <TextInput
            keyboardType="numeric"
            underlineColorAndroid="#0094FC"
            placeholder="Phone number"
            name="phone number"></TextInput>
        </View>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding ]}>

<Button gradient            onPress={() => this.props.navigation.navigate('VerificationCode')}>

    <Text center semibold white>
Verify
    </Text>
  </Button>

  </Block>

        {/* <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('VerificationCode')}>
          <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>
            Verify
          </Text>
        </TouchableOpacity> */}
        </Block>
        </Block>
      </>
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
