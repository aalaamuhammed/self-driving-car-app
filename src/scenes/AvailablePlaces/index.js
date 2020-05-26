import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Image, ImageBackground,FlatList,Alert} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';



export default class AvailablePlacesScreen extends Component {
    constructor() {
        super();
        this.state = {
          FlatListItems: [
            {key: 'Home ', category: ''},
            {key: 'Gym', category: ''},
            {key: 'Cafe', category: ''},
            {key: 'Restaurant', category: ''},
            {key: 'WorK', category: ''},
            {key:"Friend's Home ", category: ''},
            {key: 'School', category: ''},
            {key: 'College', category: ' '},
            {key: "Family's House" , category: ' '},
          ],
        };
      }
      GetItem(item) {
        Alert.alert(item);
      }
      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
            }}>
            <View
              style={{
                // height: 2,
                // width: '50%',
                // backgroundColor: '#006b8b',
                marginBottom: 40,
              }}></View>
          </View>
        );
      };
    
    render() {
        return (
<View
        style={{
          flex: 1,
          width: '100%',
          marginBottom: 0,
          height: '100%',
          backgroundColor: '#282828',
        }}>
                 <ImageBackground
          source={require('_assets/images/i9.png')}
          borderRadius={24}
          style={{
            width: '100%',
            height: '97%',
          }}>
                
                 <FlatList
              data={this.state.FlatListItems}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={({item}) => (
               
            //       <View
            //         style={{
            //    backgroundColor: 'rgba(255,255,255,0.45)',
            //   borderLeftColor: '#282828',
            //           width: '50%',
            //           borderRadius: 29,
            //           height: 42
            //           ,marginLeft:20,marginTop:20
            //         }}>
                    <Text
                      onPress={this.GetItem.bind(this, item.key)}
                      style={{marginTop: 20, fontSize: 16,justifyContent:'flex-end',marginBottom:10,marginLeft:20}}>
                      {' '}
                      {item.key}{' '}
                    </Text>
                // </View>
              )}
            />


          </ImageBackground>
            </View>
        )
    }
}
