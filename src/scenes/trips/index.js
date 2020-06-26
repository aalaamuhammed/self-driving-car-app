import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import TopTabNav from './tabnavigator';
import {OrangeHeader} from '_molecules';
import {theme} from '../../constants';
import {Button, Block, Text} from '_atoms';
import {ThemeColors} from 'react-navigation';

export default class TopTabScreen extends Component {
  
  static router = TopTabNav.router;
  render() {
    return (
      <Block bottom middle color={'primary'}>
        <Block flex={1} style={{marginTop:35}} row right>
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
              Trips
            </Text>
          </Block>
        </Block>
         
        <Block
          style={{flex: 3.8,justifyContent:'center',marginTop:25}}
          >
            <Block>
            <TopTabNav navigation={this.props.navigation} />

            </Block>
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
