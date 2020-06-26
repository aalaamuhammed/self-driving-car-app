import React, {useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Dimensions} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../../constants';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/AntDesign';
import {marginTop} from 'styled-system';

//import OrangeHeader from '.../components/orangeheader'

export default (ViewCard = ({navigation}) => {
  const [visibility, setVisibility] = useState(false);

  const [counter, setCounter] = useState(1);
  const [DATA, setDATA] = useState([{id: 0}]);
  const [width, setWidth] = useState(Dimensions.get('window').width / 2);
  const [height, setHeight] = useState(Dimensions.get('window').height / 2);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Block color={theme.colors.primary} style={{flex: 1}}>
        {/* <Block
          card
          flex={2}
          color={theme.colors.primary}
          style={{borderTopLeftRadius:0,borderTopRightRadius:0}}
          > */}
        <Block
          flex={0.5}
          middle
          color={theme.colors.primary}
          style={{marginHorizontal: 5}}>
          <Text h1 left white>
            {' '}
            Manage Wallet
          </Text>
        </Block>
        <Block style={{}} card flex={2} style={{}}>
          <Block
            flex={1}
            color="white"
            card
            style={{padding: 15, paddingVertical: 20}}>
            <Text title>How much do you want to add?</Text>
            <TextInput
              // onSubmitEditing={this.props.focusNext}
              style={styles.textInput}
              onFocus={res => {
                console.log(res.key, ' is focus');
              }}
              keyboardType="email-address"
              autoCorrect={false}
             // multiline={false}
              placeholder="Card Type"
              //   onBlur={}//func
              //value={}
              onChangeText={val => {}}
              underlineColorAndroid={'#ba55d3'}
            />
           
              <Block flex={1} margin={[50, theme.sizes.padding]} >
                <Button gradient>
                  <Text center title white>
                    Send
                  </Text>
                </Button>
              </Block>
           
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  styleLeft: {
    marginLeft: 20,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    alignItems: 'flex-start',
  },
  styleRight: {
    marginRight: 20,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    alignItems: 'flex-end',
  },

  imgOnCard: {
    width: 350,
    height: 200,
    borderRadius: 20,
  },
});
