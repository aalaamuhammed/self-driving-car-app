import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  Animated,
  Platform,
} from 'react-native';
import noti3 from '_assets/images/didi1.webp';
import didi1 from '_assets/images/DIDI2.png';
import TouchableScale from 'react-native-touchable-scale';

import Icon from 'react-native-vector-icons/FontAwesome';
import i20 from '_assets/images/i20.png';
const HEADER_MIN_HEIGHT = 100;
const HEADER_MAX_HEIGHT = 200;
import * as axios from 'axios';
import {apis} from '../../constants';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
export default class ScreenContent extends Component {
  constructor(props) {
    super(props);
    this.scrollYAnimatedValue = new Animated.Value(0);
    this.state = {
      active: true,
      DATA: [
        {
          image: didi1,
          tile: 'New Offer',
          key: 1,
          offerContent:
            'New User Offer - Get EGP 5 Credit;{/n} Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
        },

        {
          image: noti3,
          tile: 'New Offer',
          key: 3,
          offerContent:
            'New User Offer - Get EGP 5 Credit; Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
        },
        {
          image: didi1,
          tile: 'New Offer',
          key: 4,
          offerContent:
            'New User Offer - Get EGP 5 Credit; Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
        },
        {
          image: didi1,
          tile: 'New Offer',
          key: 5,
          offerContent:
            'New User Offer - Get EGP 5 Credit; Book Rides In Egypt From EGP 100. Most Used Careem Voucher Code 2020. Total Offers, 2. Online Code, 1.',
        },
      ],
    };
  }
  getOffer = async () => {
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

  renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <TouchableScale
          style={styles.flex}
          activeScale={0.7}
          friction={7}
          onPress={() =>
            this.props.navigation.navigate('OfferDetails', {
              item: item,
              active: true,
            })
          }>
          <ImageBackground style={styles.imgOnCard} source={item.image}>
            <View style={styles.typingOnCard}>
              <Text style={styles.textOnCard}>{item.tile}</Text>
            </View>
          </ImageBackground>
        </TouchableScale>
      </View>
    );
  };

  render() {
    const headerHeight = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const {navigation} = this.props;
    return (
      <View style={styles.FlatListContainer}>
        <AnimatedFlatList
          contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT}}
          scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: this.scrollYAnimatedValue}},
              },
            ],
            // <-- Add this
          )}
          data={this.state.DATA}
          renderItem={({item}) => this.renderItem({item})}
          keyExtractor={item => String(item.key)}
        />

        <Animated.View
          style={[
            styles.animatedHeaderContainer,
            {height: headerHeight, backgroundColor: '#FF8900'},
          ]}>
          <View style={styles.headerContainer}>
            <View style={styles.iconStyle}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="arrow-left" size={25} color="#F6F7F8" />
              </TouchableOpacity>
              <Image
                source={i20}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 15,
                  paddingTop: 10,
                }}
              />
            </View>
            <View
              style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.textStyle}>Offers</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlatListContainer: {flex: 3},

  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 5,
    backgroundColor: '#F6F7F8',
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  imgOnCard: {
    width: 350,
    height: 200,
    borderRadius: 20,
    borderColor: '#d6d7db',
    borderWidth: 2,
  },
  typingOnCard: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    paddingBottom: 30,
  },
  textOnCard: {
    fontSize: 35,
    backgroundColor: 'rgba(80, 60, 10, 0.8)',
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationStyle: 'double',
    fontWeight: 'normal',
    textAlignVertical: 'center',
    color: '#F6F7F8',
  },

  animatedHeaderContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: Platform.OS == 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerWrapper: {
    position: 'absolute',
    backgroundColor: 'rgba(200,0,50,0.3)',
    height: 200,
    left: 0,
    right: 0,
  },
  headerContainer: {
    flex: 1,
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    top: 0,
    right: 0,
    paddingTop: 10,
    paddingEnd: 15,
    paddingStart: 15,
  },
  textStyle: {
    fontSize: 45,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationStyle: 'double',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#F6F7F8',
    paddingBottom: 40,
    paddingTop: 5,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF8900',
  },
  title: {
    fontSize: 45,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationStyle: 'double',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#F6F7F8',
  },
  FlatListcontainer: {flex: 3},

  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 5,
    backgroundColor: '#F6F7F8',
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 25,
  },
});
