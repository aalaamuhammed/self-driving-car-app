import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {RenderCars, RenderStars, RenderFavourites} from '_molecules';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

export default class AboutScreen extends React.Component {
  


  render() {
    const {currentPosition, parkings} = this.props;

    return (
      <View style={{flex: 1,backgroundColor:'#F0F0F0'}}>
        <NavigationDrawerStructure
          onClick={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
      

        {/* <RenderFavourites /> */}
        <RenderStars/>
        {/* <RenderCars/>  */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
    backgroundColor: 'black',
  },
  submitButton: {
    backgroundColor: '#7b23f4',
    padding: 6,
    margin: 90,
    height: 40,
  },
 
});
