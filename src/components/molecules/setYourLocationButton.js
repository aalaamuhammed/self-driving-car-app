import React from 'react'
import { View } from 'react-native'
import {Button,Text} from '_atoms'

const setYourLocationButton = () => {
   
        return (
          <View
            style={{
              position: 'absolute',
              bottom: 80,
              alignSelf: 'center',
              width: 200,
            }}>
            <Button style={{padding: 10}} 
            //onPress={() => setEnableMarker(true)}
            >
              <Text center gray semibold>
                Set Your Location
              </Text>
            </Button>
          </View>
        );
      };


export default setYourLocationButton
