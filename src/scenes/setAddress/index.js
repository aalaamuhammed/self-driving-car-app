import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';
import useGlobalState from '../../utils/globalState';

export default (SetAddressScreen = ({navigation}) => {
  const [addressesList, setAddressList] = useGlobalState('addressesList');
  const [address, setAddress] = useState({place: '', street: '',id:''});
  const [isRelated, setIsRelated] = useState(false);
  const id = navigation.getParam('id');
   var result;
  useEffect(() => {
    console.log(id,'useEffect');
    result = addressesList.find(obj => {
      return obj.id === id
    })
    if (result!=undefined) {
      setIsRelated(true);
      setAddress({
        place: result.place,
        street: result.street,
      });
    }
  }, []);
  return (
    <Block padding={[20, theme.sizes.base * 2]}>
      <Text h2 bold>
        Set The address
      </Text>
      <View style={{marginTop: 20, marginBottom: 50}}>
        <TextInput
          // onSubmitEditing={this.props.focusNext}

          keyboardType="Address-address"
          autoCorrect={false}
          multiline={false}
          placeholder="Place"
          underlineColorAndroid={theme.colors.primary}
          value={address.place}
          onChangeText={text => {
            setAddress({
              ...address,
              place: text,
            });
          }}
        />
        <TextInput
          // onSubmitEditing={this.props.focusNext}

          keyboardType="Address-address"
          autoCorrect={false}
          multiline={false}
          placeholder="Street"
          underlineColorAndroid={'#0094FC'}
          value={address.street}
          onChangeText={text => {
            setAddress({
              ...address,
              street: text,
            });
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text gray bold style={{marginTop: 19}}>
          Choose on map
        </Text>
        <Button
          shadow
          color={'#F0F0F0'}
          gray
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{width: 120, marginLeft: 90, borderColor: 'red'}}>
          <Text center semibold>
            map
          </Text>
        </Button>
      </View>

      <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
        <Button
          gradient
          onPress={() => {
            navigation.navigate('Home');
            if (isRelated) {
              console.log('Related');
              result.place=address.place;
              result.street=address.street;
              const updatedList = addressesList.filter((item) => item.id !== result.id);
              updatedList=updatedList.concat(result);
              setAddressList(updatedList);

            } else {
              const newList = addressesList.concat(address);
              setAddressList(newList);
              console.log(addressesList);
            }
          }}>
          <Text center semibold white>
            Done
          </Text>
        </Button>
      </Block>
    </Block>
  );
});
