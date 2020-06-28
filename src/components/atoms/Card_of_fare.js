import React, {Component} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import Text from './text';

import Block from './Block';
import {theme} from '../../constants';
import {favouritePlaces} from '../../constants/mocks';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class Card_of_fare extends Component {
  render() {
    const {color, style, children, ...props} = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={"white" || theme.colors.white} style={cardStyles} {...props}>
         
        <Text bold h3 center secondary>Your fare is 32 EGP</Text>

        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.border,
    padding: theme.sizes.base + 4,
    marginBottom: 0,
    marginHorizontal: 30,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
  },
});
