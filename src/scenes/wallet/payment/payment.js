import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
import {Block, Button, Text} from '_atoms';
import {theme} from '../../../constants';

export default class payment extends Component {
  render() {
    return (
      <Block card color={theme.colors.gray4}>
        <Block row style={styles.secblock} card>
          <Block
            color={theme.colors.gray4}
            style={{borderRadius: theme.sizes.radius, margin: 20}}>
            <TouchableOpacity
              style={styles.iconstyle}
              onPress={() => this.props.navigation.navigate('addMoney')}>
              <Icon1 name="credit"  style={{color:theme.colors.primary}} size={50} />
              <Text gray content>
                Add Money
              </Text>
            </TouchableOpacity>
          </Block>

          <Block
            color={theme.colors.gray4}
            style={{borderRadius: theme.sizes.radius, margin: 20}}>
            <TouchableOpacity
              style={styles.iconstyle}
              onPress={() => {
                this.props.navigation.navigate('viewCard');
                console.log('viw cards');
              }}>
              <Icon1 name="credit-card" style={{color:theme.colors.primary}} size={60} />
              <Text content gray>
                View Cards
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  secblock: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconstyle: {
    flex: 0.3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',

    borderRadius: 5,
  },
});
