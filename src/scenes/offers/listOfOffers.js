import React, {useEffect} from 'react';
import {Image, StyleSheet, FlatList} from 'react-native';
import noti3 from '_assets/images/didi1.webp';
import didi1 from '_assets/images/DIDI2.png';
import TouchableScale from 'react-native-touchable-scale';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';


const DATA = [
  {
    image: didi1,
    left: true,
    key: 0,
    body: "Get 15% Discount Per Ride",
    code: "BARQ375GO",
    //startingDate: "2020-06-01T00:00:00.000Z",
   
  },

  {
    image: noti3,
    left: false,
    key: 1,
    body: "Get 20% Discount Per Ride",
    code: "BARQ320GO",
  },
  {
    image: didi1,
    left: true,
    key: 2,
  },
  {
    image: didi1,
    left: false,
    key: 3,
  },
];
export default ScreenContent = ({navigation}) => {
  

  const renderItem = ({item}) => {
    return (
     
        <TouchableScale
          style={[{
            flex:0.5,
            borderRadius: theme.sizes.radius,
             //margin: 10,
             marginVertical: 15}]}
          activeScale={0.7}
          friction={7}
          onPress={() =>
            navigation.navigate('OfferDetails', {
              item: item,
              active: true,
            })
          }>
          <Image style={[styles.imgOnCard,item.left ? styles.styleRight : styles.styleLeft]} source={item.image} />
        </TouchableScale>
    
    );
  };

  return (
    <Block bottom middle color={'primary'}>
      <Block flex={0.2} row right>
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
          <Text h1 center  gray4>
            Offers
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
};

const styles = StyleSheet.create({
  styleLeft: {
    marginLeft: 30,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    alignItems: 'flex-start',
  },
  styleRight: {
    marginRight: 30,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    alignItems: 'flex-end',
  },

  imgOnCard: {
    width: 330,
    height: 200,
    borderRadius: 20,
  },
});
