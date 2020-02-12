import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
            Phone Number
          </Text>
        </View>

        <View style={{marginBottom: 30}}>
          <TextInput
            keyboardType="numeric"
            underlineColorAndroid="#ffd420"
            placeholder="Phone number"
            name="phone number"></TextInput>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('VerificationCode')}>
          <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>
            Verify
          </Text>
        </TouchableOpacity>
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
