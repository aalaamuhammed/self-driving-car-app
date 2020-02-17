import React, {Component} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import Text from './Text';
import Block from './Block';
import {theme} from '../../constants';
import {favouritePlaces} from '../../constants/mocks';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class Card_of_favourites extends Component {
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }

  render() {
    const {color, style, children, ...props} = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...props}>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 0,
            padding: 2,
            backgroundColor: 'white',
          }}>
          <View style={{margin: 5, backgroundColor: 'white', marginLeft: 0}}>
            <Text size={17} bold>
              You reached your destination
            </Text>
          </View>
          <View style={{margin: 1, backgroundColor: 'white'}}>
            <Image
              source={require('_assets/images/i40.png')}
              style={{width: 20, height: 35, resizeMode: 'contain'}}></Image>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderLeftColor: 'black',
            marginVertical: 10,
            backgroundColor: 'gray',
            borderColor: 'gray',
          }}
        />

        <Text h3>Rate your trip </Text>

    
        <AirbnbRating
          reviewColor="#0094FC"
          reviews={['Terrible', 'Bad', 'Good', 'Very Good', 'Wow', 'Amazing']}
          onFinishRating={this.ratingCompleted}

        />

        <View
          style={{
            borderTopWidth: 1,
            borderLeftColor: 'black',
            marginBottom: 10,
            backgroundColor: 'gray',
          }}
        />
        {/* <Text h3 gray>How was your trip ?</Text> */}
        <View style={{width: 260}}>
          <TextInput
            style={{paddingTop: 0, paddingRight: 10}}
            keyboardType="default"
            autoCorrect={false}
            multiline={false}
            placeholder=" How was your trip ?"
            placeholderTextColor="#909090"></TextInput>
        </View>

        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base,
    margin: theme.sizes.base,
    marginHorizontal: 30,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
  },
});
