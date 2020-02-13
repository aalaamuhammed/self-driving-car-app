import React, {Component} from 'react';
import {
  StyleSheet,
  
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Block,Text} from "_atoms";
import {theme} from'../../constants';


export default class CreateAccountScreen extends Component {
  constructor(props) {
    super(props);
    this._create = this._create.bind(this);

    this.state = {
      click: 0,
      top: 0,
    };
  }

  _create() {
    this.setState({click: 3, top: 150}, () => {
      console.log('CreateAcc');
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
            Create Account
          </Text>
          <Block middle>

        <View style={{marginBottom: 20}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            multiline={false}
            placeholder="Email"
            underlineColorAndroid="#0094FC"
>              
            </TextInput>
        </View>
        <View style={{marginBottom: 5}}>
          <TextInput
            underlineColorAndroid="#0094FC"
            placeholder="Password"
            name="Password"></TextInput>
        </View>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding ]}>

<Button gradient    onPress={() => this.props.navigation.navigate('BasicInfo')}>

    <Text center semibold white>
    Create Account

    </Text>
  </Button>

  </Block>

{/* 
        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('Terms')}>
          <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>
            Create account
          </Text>
        </TouchableOpacity> */}

        <Text style={{textAlign: 'center', color: '#242a37'}}>
          Need Support?
        </Text>
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
    marginBottom: 39,
    alignItems: 'center',
  },
});
