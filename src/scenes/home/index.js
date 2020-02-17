import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RenderCars, RenderStars, RenderFavourites} from '_molecules';
import MapView, {ProviderPropType} from 'react-native-maps';
import {theme} from '../../constants';
import {NavigationDrawerStructure} from '_navigations/app-navigator.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);

    this.state = {
      currentLongitude: 30.98825, //Initial Longitude
      currentLatitude: 30.7324, //Initial Latitude
      clicked: 1,
      startRide: false,
      selectCar: false,
      rateTrip: false,
    };
  }
  changeState = clicked => {
    this.setState({clicked: clicked});
  };

  render() {
    const {currentPosition, parkings} = this.props;

    return (
      <View style={{flex: 1}}>
        <NavigationDrawerStructure
          onClick={() => {
            this.props.navigation.toggleDrawer();
          }}
        />
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
            latitudeDelta: .002922,
            longitudeDelta: .00221,
          }}></MapView>

        {this.state.clicked === 1 ? (
          <RenderFavourites 
          navigation={this.props.navigation}
          changeState={this.changeState} />
        ) : this.state.clicked === 3 ? (
          <RenderStars changeState={this.changeState} />
        ) : this.state.clicked === 5 ? (
          <RenderCars changeState={this.changeState} />
        ) : (
          <RenderCars changeState={this.changeState} />
        )}
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

  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
