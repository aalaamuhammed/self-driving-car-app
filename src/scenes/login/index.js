import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,      KeyboardAvoidingView

} from 'react-native';
import {Button,Text,Block} from '_atoms'
import {theme} from '../../constants'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 2,
    };
  }

  render() {
    return (

        <Block padding={[20, theme.sizes.base * 2]}>
          <Text h1 bold>
            Login
          </Text>
          <Block middle>

        <View style={{marginBottom: 10,padding:5}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Moblie Number"
            underlineColorAndroid="#2BDA8E"></TextInput>
        </View>
        <View style={{marginBottom: 10,padding:5}}>
          <TextInput
            underlineColorAndroid="#2BDA8E"
            placeholder="Password"
            name="Password"></TextInput>
        </View>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding ]}>

        <Button gradient    onPress={() => this.props.navigation.navigate('Home')}>

            <Text center semibold white>
              Login
            </Text>
          </Button>
        
          </Block>
          <Button onPress={() =>this.props.navigation.navigate("Home")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </Button>

        {/* //this.props.navigation.navigate('Home') */}
        {/* <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{textAlign: 'center', paddingTop: 5,fontSize:17}}> Sign in</Text>
        </TouchableOpacity> */}
        <Text style={{textAlign: 'center', color: '#242a37'}}>
          {' '}
          Need Support?
        </Text>
        </Block>
        </Block>

      
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer2: {
    backgroundColor: '#f1f2f6',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 35,
    margin: 25,
    alignItems: 'center',
    marginBottom: 60,
  },
  login: {
    flex: 1,
    justifyContent: "center"}
});
