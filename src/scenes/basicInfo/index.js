import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button,Text,Block} from '_atoms'
import {theme} from '../../constants'

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);

    this._Next = this._Next.bind(this);

    this.state = {
      click: 0,
      top: 0,
    };
  }
  _Next() {
    this.setState({click: 5, top: 200}, () => {
      console.log('BasicInfo');
      console.log(this.state.top);

      console.log(this.state.click);
      this.props.changeState(this.state.click, this.state.top);
    });
  }

  render() {
    return (
      <>
              <Block padding={[20, theme.sizes.base * 2]}>

        <View style={{marginBottom: 20}}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              margin: 25,
              marginBottom: 15,
              color: '#242a37',
              fontWeight: '600',
            }}>
            Create Account
          </Text>

          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Full Name"
            underlineColorAndroid="#2BDA8E"
            ></TextInput>
        </View>

        <View style={{marginBottom: 15}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Country"
            underlineColorAndroid="#2BDA8E"
            ></TextInput>
        </View>

        <View style={{marginBottom: 15}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="City"
            underlineColorAndroid="#2BDA8E"
            ></TextInput>
        </View>

        <View style={{marginBottom: 30}}>
          <TextInput
            underlineColorAndroid="#2BDA8E"
            placeholder="Address"
            name="Address"></TextInput>
        </View>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding ]}>


        <Button gradient    onPress={() => this.props.navigation.navigate('PhoneNumber')}>

<Text center semibold white>
Next
</Text>
</Button>
</Block>

        {/* <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('PhoneNumber')}>
          <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>
            Next
          </Text>
        </TouchableOpacity> */}
        <Text style={{textAlign: 'center', color: '#242a37'}}>
          Need Support?
        </Text>
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
    marginBottom: 30,
  },
});
