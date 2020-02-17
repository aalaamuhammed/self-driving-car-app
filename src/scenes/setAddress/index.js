import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';
export default class SetAddressScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    };
  }
  render() {
    return (
      <Block padding={[20, theme.sizes.base * 2]}>
        <Text h2 bold>
          Set The address
        </Text>
        <View  style={{marginTop:20,marginBottom:50}}>
          <TextInput
            // onSubmitEditing={this.props.focusNext}

            keyboardType="Address-address"
            autoCorrect={false}
            multiline={false}
            placeholder="Address"
            underlineColorAndroid={'#0094FC'}
            value={this.state.Address}
            onChangeText={text => {
              this.setState({Address: text});
            }}></TextInput>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text gray bold style={{marginTop:19}}>Choose on map</Text>
          <Button
           shadow
           color={'#F0F0F0'}
           gray
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
            style={{width: 120, marginLeft: 90, borderColor: 'red'}}>
            <Text center semibold >
              map
            </Text>
          </Button>
        </View>

        <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
          <Button
            gradient
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text center semibold white>
              Done
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}
