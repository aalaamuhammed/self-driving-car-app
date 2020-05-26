import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

const {width, height} = Dimensions.get('window');
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.AnimatedOpacity = new Animated.Value(0);
  }
  render() {
    Animated.timing(this.AnimatedOpacity, {
      toValue: 1,
      duration: 900,
    }).start();
    const item = this.props.navigation.getParam('item');
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        <Animated.View
          style={styles.imgView}>
          <Image style={styles.imgOnCard} source={item.image} />
        </Animated.View>
        <Animated.View
          style={[styles.textView,{transform: [
    {
      translateY: this.AnimatedOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [height, 5],
      }),
    },
  ],}]}>
          <Text
            style={{
              padding: 20,
              fontSize: 16,
              color: 'gray',
              fontWeight: '600',
            }}>
            {item.offerContent}
          </Text>
          <View
            style={{
              flex: 1,

              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              activeOpacity={.7}
              style={{backgroundColor: '#FF8900', borderRadius: 20}}          
              onPress={() =>
                this.props.navigation.navigate('ListOfOffers')
              }>
              <Text
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 10,
                  fontSize: 20,
                  color: 'white',
                }}>
                Apply
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={.7}
              style={{backgroundColor: '#FF8900', borderRadius: 20}}
              onPress={() =>
                this.props.navigation.navigate('ListOfOffers')
              }>
              <Text
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 10,
                  fontSize: 20,
                  color: 'white',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imgView:{flex: 0.4, opacity: this.AnimatedOpacity, borderRadius: 20},
  imgOnCard: {
    width: width,
    height: 200,

    borderColor: '#d6d7db',
    borderWidth: 0.5,
  },
 textView:{
  margin: 10,
  flex: 0.5,
  backgroundColor: 'white',
  borderRadius: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
  borderColor: 'gray',
  borderWidth: 0.2,
  
}

});
