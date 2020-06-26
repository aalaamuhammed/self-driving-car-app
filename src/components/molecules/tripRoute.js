import React from 'react'
import { View,Animated,TouchableOpacity,Dimensions } from 'react-native'
import {Button,Text,Block} from '_atoms'
import {theme} from '../../constants'
import Icon_ from 'react-native-vector-icons/MaterialCommunityIcons';
import useGlobalState from '../../utils/globalState';
const tripRoute = ({currentLocationDetails,targetLocationDetails,tripRoutAnim}) => {
    const{height}=Dimensions.get('window');
    const [clicked, setClicked] = useGlobalState('clicked')
    return (
      <Animated.View
        style={{
          position: 'absolute',
          margin: 20,
          alignSelf: 'center',
          bottom: 0,
          left: 0,
          right: 0,
          top: height / 2,
          transform: [
            {
              translateY: tripRoutAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [30, height],
              }),
            },
          ],
        }}>
        <Block card>
          <Block
            card
            color="rgba(255,255,255,.8)"
            style={{justifyContent: 'space-evenly'}}>
            <Block flex={0.4} row style={{justifyContent: 'space-between'}}>
              <Block
                row
                card
                flex={0.5}
                color={theme.colors.white}
                style={{ width: 150,borderBottomLeftRadius:0,borderTopLeftRadius:0,marginTop:18}}>
                <Block
                  flex={0.38}
                  center
                  middle
                  color={theme.colors.gray4}
                  style={{
                    borderRadius: 100,
                    margin: 5,
                    marginVertical: 5,
                    padding: 1,
                  }}>
                  <Icon_
                    name="taxi"
                    size={25}
                    style={{color: theme.colors.primary}}
                  />
                </Block>
                <Block middle style={{}}>
                  <Text regular title>
                    Ride Path
                  </Text>
                </Block>
              </Block>
              <Block flex={0.25}   middle>
                <TouchableOpacity
                  onPress={() => {
                    setClicked(0)
                    tripRoutAnim.setValue(1);
                  }}>
                  <Icon_
                    name={'autorenew'}
                    size={30}
                    color={theme.colors.primary}
                    style={{alignSelf:'flex-end',marginRight:15}}
                  />
                </TouchableOpacity>
              </Block>
            </Block>
            <Block row center flex={.5} style={{justifyContent:'space-evenly'}}>
              <Block center flex={.2}>
              <Text  regular black>
                From:
              </Text>
              </Block>
                <Block
                  middle
                  card
                  style={{paddingVertical:15,padding:10,marginLeft:2,borderTopRightRadius:0,borderBottomRightRadius:0}}
                  color={theme.colors.white}>
                   <Text  primary>
                     {`${currentLocationDetails.place}, ${currentLocationDetails.street}`}</Text>
              </Block>
            </Block>
            
            <Block row center flex={.5} style={{justifyContent:'space-evenly',marginBottom:10}}>
              <Block center flex={.2}>
              <Text  regular black>
                To:
              </Text>
              </Block>
                <Block
                  middle
                  card
                  style={{paddingVertical:15,padding:10,marginLeft:2,borderTopRightRadius:0,borderBottomRightRadius:0}}
                  color={theme.colors.white}>
                   <Text regular primary>
                     {`${targetLocationDetails.place}, ${targetLocationDetails.street}`}</Text>
              </Block>
            </Block>
 
          </Block>
          <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
            <Button gradient>
              <Text center semibold white>
                confirm
              </Text>
            </Button>
          </Block>
        </Block>
      </Animated.View>
    );
  };


export default tripRoute
