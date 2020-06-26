import React,{useEffect}  from 'react';
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
import {theme,apis} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as axios from 'axios';

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
          <View style={{flex:.65, borderRadius: theme.sizes.radius}}>
            <Image style={styles.imgOnCard} source={item.image} />
          </View>
          <View style={{justifyContent:'space-between', flex: 1}}>
            <Block bottom flex={2} >
              <Block flex={1}  style={{borderRadius:theme.sizes.radius,margin:10,paddingStart:10,paddingTop:10,paddingEnd:10,}}  color={'white'}>
                <Text>Here is again the most Popular offer for our loyal customers.</Text>
                 <Text>{item.body}.</Text>
                 <Text>code: {item.code}.</Text>
              </Block>

              {/* <Text
                style={{
                 
                  margin: 20,
                  padding: 15,
                  fontSize: 16,
                  color: 'gray',
                  fontWeight: '600',
                  backgroundColor: 'white',
                  borderRadius: theme.sizes.radius,
                }}>
                {}{item.body} 
              {' '}code :{item.code}
              </Text> */}
            </Block>

            <View
              style={{
                flex: 1,
                paddingBottom: 20,
                alignItems: 'center',
                flexDirection: 'row',
                
                justifyContent: 'space-evenly',
              }}>
               
              
                   <Block style={{flex:1,marginHorizontal:25}}>
                    <Button gradient>
                      <Text center title white>
                        Apply
                      </Text>
                    </Button>
                  </Block>
                  <Block style={{flex:1,marginHorizontal:15}}>
                    <Button gradient  onPress={() => navigation.navigate('ListOfOffers')}>
                      <Text center title white>
                        Cancel
                      </Text>
                    </Button>
                  </Block>
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  imgOnCard: {
    width: width - 60,
    height: 180,
    borderRadius: theme.sizes.radius,
    margin: 15,
    
    // borderColor: '#d6d7db',
    // borderWidth: 0.5,
  },
  textView: {
    flex: 0.7,
    backgroundColor: theme.colors.gray3,
    margin: 20,
    marginHorizontal: 50,
    borderRadius: theme.sizes.radius,
    justifyContent: 'center',
  },
});
