import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../constants';
import Icon_ from 'react-native-vector-icons/AntDesign';
import { borderColor } from 'styled-system';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

export default (AvailablePlacesScreen = () => {
  const [favourite,setFavourite]=useState(true);
  const [not_favourite,setNot_Favourite]=useState(false);

  const [FlatListItems, setFlatListItems] = useState([
    {key: 'Home ', Icon: 'home',favourite:favourite},
    {key: 'Gym', Icon: 'running',favourite:favourite},
    {key: 'Cafe', Icon: 'coffee',favourite:favourite},
    {key: 'Restaurant', Icon: 'utensils',favourite:not_favourite},
    {key: 'Mosque', Icon: 'mosque',favourite:not_favourite},
    {key: "Friend's Home ", Icon: 'hotel',favourite:not_favourite},
    // {key: 'School', Icon: ''},
    {key: 'College', Icon: 'university',favourite:not_favourite},
    {key: "Clinic", Icon: 'clinic-medical',favourite:not_favourite},
    
  ]);

  const GetItem = item => {
    console.log(item)
    //  Alert.alert(item);
    setFavourite(!item)
    console.log(favourite)

  };
  const FlatListItemSeparator = () => {
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
            marginBottom: 10,
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        marginBottom: 0,
        height: '100%',
        backgroundColor: theme.colors.gray4,

      }}>
      <Block style={{margin: 20, borderRadius: 15}} color="white">
        <FlatList
          data={FlatListItems}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({item}) => (
            <View>

            <View style={{flexDirection: 'row',margin:6}}>
              <View
                style={{
                  width: '10%',
                  borderRadius: 29,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                
                  <Icon5 name={item.Icon} size={23} color={'purple'} />

                  
              </View>
              <View
                style={{
                  width: '75%',
                  borderRadius: 29,
                  marginLeft: 10,
                   marginTop: 10,
                  height:40,
                  justifyContent: 'center',

                }}>
                <Text
                  onPress={() => GetItem(item.key)}
                  style={{
                    fontSize: 16,
                    justifyContent: 'flex-end',
                    marginLeft: 3,
                    marginRight: 90,
                  }}>
                  {' '}
                  {item.key}{' '}
                </Text>
              </View>

              <View style={{borderWidth: .5, borderColor:'#909090',height:22,marginTop:22}} />
              <View
                style={{
                  width: '10%',
                  borderRadius: 29,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                
                <TouchableOpacity  onPress={() => {
                GetItem(item.favourite)                  
                }}>
                {
                item.favourite?
                <Icon_ name={'heart'} size={23} color={'purple'} />:
                <Icon_ name={'hearto'} size={23} color={'purple'}/> }
              </TouchableOpacity>
              </View>
             

            </View>
             <View style={{borderWidth: .5, borderColor:'#909090',height:1,marginHorizontal:35}} />


             </View>
          )}
        />
      </Block>
    </View>
  );
});
