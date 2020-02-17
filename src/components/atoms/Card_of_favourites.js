import React, {Component} from 'react';
import {StyleSheet, View, Image, TextInput, Text} from 'react-native';

import Block from './Block';
import {theme} from '../../constants';
import {favouritePlaces} from '../../constants/mocks';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Card_of_favourites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 2,
    };
  }
  render() {
    const {color, style, children, ...props} = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        <View style={{flexDirection: 'row'}}>
          {favouritePlaces.map(place => {
            return (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Address')}>
                  <Image
                    source={place.image}
                    style={{
                      width: 35,
                      height: 35,
                      resizeMode: 'contain',
                      margin: 5,
                    }}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    borderLeftWidth: 1,
                    borderLeftColor: 'black',
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundColor: 'gray',
                  }}
                />
              </View>
            );
          })}
          <View style={{marginLeft: 9, marginTop: 6}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Places')}>
              <Image
                source={require('_assets/images/i30.png')}
                style={{width: 20, height: 35, resizeMode: 'contain'}}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderLeftColor: 'black',
            marginVertical: 10,
            backgroundColor: 'gray',
          }}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 187}}>
            <TextInput
              style={{paddingTop: 0, paddingRight: 10}}
              keyboardType="default"
              autoCorrect={false}
              multiline={false}
              placeholder="  Lets'Go"
              placeholderTextColor="#909090"></TextInput>
          </View>

          <View
            style={{
              borderLeftWidth: 1,
              borderLeftColor: 'black',
              marginRight: 19,
            }}
          />
          <Image
            source={require('_assets/images/i10.jpg')}
            style={{width: 25, height: 35, resizeMode: 'contain'}}></Image>
        </View>

        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
    margin: 30,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
  },
});
