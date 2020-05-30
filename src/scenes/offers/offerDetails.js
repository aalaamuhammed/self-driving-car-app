import React  from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Animated,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';
const {width, height} = Dimensions.get('window');
export default  Details =({navigation})=> {
  
    AnimatedOpacity = new Animated.Value(0);

 
    Animated.timing(AnimatedOpacity, {
      toValue: 1,
      duration: 900,
    }).start();
    const item = navigation.getParam('item');
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.primary,
        }}>
        <Animated.View
          style={[
            styles.textView,
            {
              transform: [
                {
                  translateY: AnimatedOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [height, 10],
                  }),
                },
              ],
            },
          ]}>
          <View style={{flex: 0.3, borderRadius: theme.sizes.radius}}>
            <Image style={styles.imgOnCard} source={item.image} />
          </View>
          <View style={{justifyContent: 'space-between', flex: 1}}>
            <Block center bottom flex={0.9}>
              <Text
                style={{
                  margin: 20,
                  padding: 15,
                  fontSize: 16,
                  color: 'gray',
                  fontWeight: '600',
                  backgroundColor: 'white',
                  borderRadius: theme.sizes.radius,
                }}>
                {item.offerContent}
              </Text>
            </Block>

            <View
              style={{
                flex: 0.4,
                paddingBottom: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.sizes.radius,
                }}
                onPress={() => navigation.navigate('ListOfOffers')}>
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
                activeOpacity={0.7}
                style={{
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.sizes.radius,
                }}
                onPress={() => navigation.navigate('ListOfOffers')}>
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
          </View>
        </Animated.View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  imgOnCard: {
    width: width - 60,
    height: 200,
    borderRadius: theme.sizes.radius,
    margin: 15,

    // borderColor: '#d6d7db',
    // borderWidth: 0.5,
  },
  textView: {
    flex: 0.8,
    backgroundColor: theme.colors.gray3,
    margin: 20,
    marginHorizontal: 50,
    borderRadius: theme.sizes.radius,
    justifyContent: 'center',
  },
});
