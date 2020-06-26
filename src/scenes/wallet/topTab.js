import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import TopTabNav from './walletNavigation/tabNav';
import {OrangeHeader} from '_molecules';
import {theme} from '../../constants';
import {Button, Block, Text} from '_atoms';
import {ThemeColors} from 'react-navigation';

export default class TopTabScreen extends Component {
  move = () => {
    this.props.navigation.openDrawer();
  };
  state = {
    balance: 3,
  };
  static router = TopTabNav.router;
  render() {
    return (
      <Block bottom middle color={'primary'}>
        <Block flex={0.25} row right>
          <Block
            middle
            card
            flex={0.5}
            color={'rgba(255,255,255,.6)'}
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              marginVertical: 30,
            }}>
            <Text h1 center regular gray4>
              Wallet
            </Text>
          </Block>
        </Block>
        <Block
          flex={0.27}
          card
          middle
          color={theme.colors.white}
          style={{marginHorizontal: 100, marginBottom: 20}}>
          <Block flex={0.6} center middle>
            <Text bod primary h3>
              Your balance
            </Text>
            <Block row center middle>
              <Text primary style={{fontSize: 50}}>{this.state.balance}</Text>
              <Text primary style={{fontSize: 15, alignSelf: 'flex-end'}}>EGP</Text>
            </Block>
          </Block>
        </Block>
        <Block
          style={{flex: 0.5, marginBottom: 80, marginHorizontal: 25}}
          card
          >
          <TopTabNav navigation={this.props.navigation} />
        </Block>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  // firstblock:{
  //     flex:.7,
  //     flexDirection:'column',
  //     alignItems:'center',
  //     justifyContent:'center'
  // },
  urbalance: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  secblock: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  iconstyle: {
    flex: 0.3,

    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.13,
    shadowRadius: 5.6,

    elevation: 2,
    borderRadius: 5,
  },
});
