import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
<<<<<<< HEAD
} from 'react-native';
=======
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Text, Block} from '_atoms';
import {theme} from '../../constants';
>>>>>>> origin/master

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    // this.hasError = this.hasError.bind(this);
    this.checkAndDecide = this.checkAndDecide.bind(this);

    this.state = {
      MobileNumber: '',
      Password: '',
      click: 2,
    };
  }

  checkAndDecide() {
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
<<<<<<< HEAD
      <>
        <View style={{marginBottom: 20,padding:15}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Moblie Number"
            underlineColorAndroid="#ffd420"></TextInput>
        </View>
        <View style={{marginBottom: 30,padding:15}}>
          <TextInput
            underlineColorAndroid="#ffd420"
            placeholder="Password"
            name="Password"></TextInput>
        </View>

        {/* //this.props.navigation.navigate('Home') */}
        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{textAlign: 'center', paddingTop: 5,fontSize:17}}> Sign in</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: '#242a37'}}>
          {' '}
          Need Support?
        </Text>
      </>
=======
      <Block padding={[20, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <View style={{marginBottom: 10, padding: 5}}>
            <TextInput
              keyboardType="numeric"
              name="Mobile"
              placeholder="Mobile Number"
              underlineColorAndroid={
                this.state.MobileNumber.includes( 'A')
                  ? 
                  'red': '#0094FC'
              }
              value={this.state.MobileNumber}
              onChangeText={text => {
                this.setState({MobileNumber: text});
              }}></TextInput>

               {this.state.MobileNumber.includes( 'A') && <Text accent> mobile number doesn't contain characters</Text>}
          </View>
          <View style={{marginBottom: 10, padding: 5}}>
            <TextInput
              value={this.state.Password}
              onChangeText={text => {
                this.setState({Password: text});
              }}
              underlineColorAndroid={
                this.state.Password.includes(' ') ? 'red':'#0094FC'
              }
              // secureTextEntry={true}

              placeholder="Password"
              name="Password"></TextInput>
               {this.state.Password.includes( ' ') && <Text accent> Password doesn't contain  space </Text>}

          </View>
          <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
            <Button gradient onPress={this.checkAndDecide}>
              <Text center semibold white>
                Login
              </Text>
            </Button>
          </Block>
          <Button
            onPress={() => this.props.navigation.navigate('ForgotPassword')}>
            <Text gray caption center style={{textDecorationLine: 'underline'}}>
              Forgot your password?
            </Text>
          </Button>

          {/* //this.props.navigation.navigate('Home') */}
          {/* <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{textAlign: 'center', paddingTop: 5,fontSize:17}}> Sign in</Text>
        </TouchableOpacity> */}
          <Text style={{textAlign: 'center', color: '#242a37'}} onPress={()=>{this.props.navigation.navigate('Address')}}>
            {' '}
            Need Support?
          </Text>
        </Block>
      </Block>
>>>>>>> origin/master
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
<<<<<<< HEAD
=======
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  hasError: {
    backgroundColor:'red'
  },
>>>>>>> origin/master
});
