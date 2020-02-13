import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Block, Text, Button} from '_atoms';
import {theme, mocks} from '../../constants';
import StarRatingComponent from 'react-star-rating-component';

import {parkingsSpots} from '../../constants/mocks';

const {width} = Dimensions.get('window');

class RenderCars extends Component {
  constructor(props) {
    super(props);
    this.select=this.select.bind(this);

  this.state = {
    FlatListItems: parkingsSpots,
    hours: {},
    active: null,
    activeModal: null,      click: 1,

  };
  }
  select(){
    this.setState({click:3},()=>{

      this.props.changeState(this.state.click);

    })
  }
  renderButton = () => {
    return (
      <TouchableWithoutFeedback>
        <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 0,
            paddingBottom: theme.sizes.base,
            // width: 345 - 24 * 2,
            marginHorizontal: 7,
          }}>
          <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
            <Button
              gradient
              onPress={this.select}>
              <Text center semibold white>
                Select Car
              </Text>
            </Button>
          </Block>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderParking = item => {

    return (
      <TouchableWithoutFeedback
        key={`parking-${item.id}`}
        onPress={() => this.setState({active: item.id})}>
        <View style={[styles.parking, styles.shadow]}>
          {/* <View style={{flexDirection: 'row-reverse'}}> */}
          {/* 
          </View> */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={item.image}
              style={{width: item.width, height: item.height}}></Image>
            <Text>{item.name}</Text>
            <Text>
              between {item.startingPrice} & {item.endingPrice} EGP
            </Text>
            <Text>{item.timeToarrive} min till arrive</Text>
            <Text>Verification Code{' '}  
            <Text primary>{item.verificationCode}</Text>


            </Text>
            <Text>Car license code isssss
            <Text primary> {item.licenseCode}</Text>

            </Text>
         
          </View>

        
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderParkings = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        style={styles.parkings}
        data={this.state.FlatListItems}
        extraData={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({item}) => this.renderParking(item)}
      />
    );
  };
  render() {
    return (
      <React.Fragment>
        {this.renderParkings()}
        {this.renderButton()}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  parkings: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: theme.sizes.base * 3,
  },
  parking: {
    marginBottom: 40,
    // flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
    width: 345 - 24 * 2,
    // backgroundColor:'red'
  },
  buy: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: theme.sizes.base * 1.5,
    paddingVertical: theme.sizes.base,
    backgroundColor: theme.colors.red,
    borderRadius: 6,
    backgroundColor: 'red',
  },
  buyTotal: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
  },
  buyTotalPrice: {
    color: theme.colors.white,
    fontSize: theme.sizes.base * 2,
    fontWeight: '600',
    paddingLeft: theme.sizes.base / 4,
    backgroundColor: 'red',
  },
  buyBtn: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
});

export default RenderCars;
