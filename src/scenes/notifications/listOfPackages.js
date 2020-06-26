import React, {Component} from 'react';
import {Image, StyleSheet, FlatList} from 'react-native';
import noti3 from '_assets/images/didi1.webp';
import didi1 from '_assets/images/DIDI2.png';
import TouchableScale from 'react-native-touchable-scale';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';
import * as axios from 'axios';
import {apis} from '../../constants';

const DATA = [
  {
    image: didi1,
    tile: 'New Offer',
    left: false,
    key: 1,
    offerContent:
      'New User Offer - Get EGP 5 Credit;{/n} Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
  },

  {
    image: noti3,
    tile: 'New Offer',
    left: true,
    key: 3,
    offerContent:
      'New User Offer - Get EGP 5 Credit; Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
  },
  {
    image: didi1,
    tile: 'New Offer',
    left: false,
    key: 4,
    offerContent:
      'New User Offer - Get EGP 5 Credit; Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
  },
  {
    image: didi1,
    tile: 'New Offer',
    left: true,
    key: 5,
    offerContent:
      'New User Offer - Get EGP 5 Credit; Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
  },
];
export default (ScreenContent = ({navigation}) => {
  const getOffer = async () => {
    try {
      const response = await axios.get(apis.offers_api);
      //  this.setState({DATA: response.data});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // componentDidMount = () => {
  //   {
  //     this.getOffer();
  //   }
  // };

  const renderItem = ({item}) => {
    return (
      <Block
        color={theme.colors.gray4}
        card
        middle
        flex={0.5}
        style={[
          {marginVertical: 15},
          item.left ? styles.styleRight : styles.styleLeft,
        ]}>
        <TouchableScale
          style={{borderRadius: theme.sizes.radius, margin: 10}}
          activeScale={0.7}
          friction={7}
          onPress={() =>
            navigation.navigate('OfferDetails', {
              item: item,
              active: true,
            })
          }>
          <Image style={styles.imgOnCard} source={item.image} />
        </TouchableScale>
      </Block>
    );
  };

  return (
    <Block bottom middle color={'primary'}>
      <Block flex={0.2} row right>
        <Block
          middle
          card
          flex={0.55}
          color={'rgba(255,255,255,.6)'}
          style={{
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            marginVertical: 30,
          
          }}>
          <Text h1 center regular  gray4>
            Packages
          </Text>
        </Block>
      </Block>
      <Block
        flex={0.75}
        card
        middle
        style={{
          
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          marginBottom: 2,
        }}>
        <FlatList
          //   horizontal={true}
          data={DATA}
          renderItem={({item}) => renderItem({item})}
          keyExtractor={item => String(item.key)}
        />
      </Block>
    </Block>
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
