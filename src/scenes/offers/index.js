import React, {useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import Stack from './navigation/stacknavigator';


export default  offers=({navigation,route})=>{
//  const router = Stack.router;
 // const router=useRoute()
  // const move = () => {
  //  navigation.openDrawer();
  // };

   
    return (
      <View style={styles.container}>
        <Stack navigation={navigation} />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
