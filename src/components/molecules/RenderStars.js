import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Block, Text, Button, Card_of_stars,Card_of_favourites,Card_of_fare} from '_atoms';
import {theme, mocks} from '../../constants';


const {width} = Dimensions.get('window');

class RenderStars extends Component {
  constructor(props) {
    super(props);
    this.select=this.select.bind(this);

  this.state = {
    hours: {},
    active: null,
    activeModal: null,
    click: 1,

  };
}

  select(){
    this.setState({click:7},()=>{

      this.props.changeState(this.state.click);

    })
  }

  renderStars = item => {
    return (
      <TouchableWithoutFeedback>
        <View
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            bottom: 0,
            paddingBottom: theme.sizes.base,
            // width: 345 - 24 * 2,
            marginHorizontal: 7,
          }}>
          <Card_of_fare/>
          <Card_of_stars />
          <Block middle flex={0.5} margin={[0, theme.sizes.padding]}>
            <Button
              gradient
              onPress={this.select}>
              <Text center semibold white>
                Submit Feedback{' '}
              </Text>
            </Button>
          </Block>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return <React.Fragment>{this.renderStars()}</React.Fragment>;
  }
}

const styles = StyleSheet.create({
  trans: {
    backgroundColor: 'rgba(255,255,255,0.45)',
    // width: 290,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
    //    position:'absolute',
    marginBottom: 10,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  parkings: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: theme.sizes.base * 3,
  },
  parking: {
    marginBottom: 40,
    // flexDirection: 'row',
    // backgroundColor: theme.colors.white,
    backgroundColor: 'rgba(255,255,255,0.45)',

    borderRadius: 20,
    padding: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
    width: 345 - 24 * 2,
    // backgroundColor:'red'
  },

  container: {
    backgroundColor: 'rgba(255,255,255,0.45)',

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 45,
    // width: 200,

    alignItems: 'center',
  },
});

export default RenderStars;
