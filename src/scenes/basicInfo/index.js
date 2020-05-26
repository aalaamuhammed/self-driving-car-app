import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput, Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Button,Text,Block,Input} from '_atoms'
import {theme} from '../../constants'

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);

    this._Next = this._Next.bind(this);

    this.state = {
      click: 0,
      top: 0,
      email: null,
      username: null,
      password: null,
      errors: [],
      loading: false,
      disabled:false,
    };
  }
  handleSignUp() {
    const { navigation } = this.props;
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            }
          }
        ],
        { cancelable: false }
      );
    }
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
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    return (
      <>

        <Block padding={[20, theme.sizes.base ]}>

         
          <Block padding={[0, theme.sizes.base ]}>
          <Text h1 bold >
            Sign Up
          </Text>
          <Block middle>
<View style= {{marginBottom:15}}>


<TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Full Name"
        
            underlineColorAndroid="#0094FC"
            ></TextInput>

</View>
        


        <View style={{marginBottom: 15}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="Country"
            underlineColorAndroid="#0094FC"
            ></TextInput>
        </View>

        <View style={{marginBottom: 15}}>
          <TextInput
            keyboardType="email-address"
            autoCorrect={false}
            maxLength={30}
            multiline={false}
            placeholder="City"
            underlineColorAndroid="#0094FC"
            ></TextInput>
        </View>

        <View style={{marginBottom: 30}}>
          <TextInput
            underlineColorAndroid="#0094FC"
            placeholder="Address"
            name="Address"
            onBlur ={()=>this.setState({disabled:true})}>
            </TextInput>
        </View> 
            {/* <Input
              email
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              label="Username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
             <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />


        {/* <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={() => this.props.navigation.navigate('PhoneNumber')}>
          <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>
            Next
          </Text>
        </TouchableOpacity> */}
        
        <Block middle flex={0.5} margin={[0, theme.sizes.padding ]}>


        <Button disabled={!this.state.disabled} gradient={this.state.disabled} onPress={() => this.props.navigation.navigate('PhoneNumber')}>

<Text center h3 semibold gray={!this.state.disabled} white={this.state.disabled}>
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
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
