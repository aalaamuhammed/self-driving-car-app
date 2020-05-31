import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../../constants';
import TouchableScale from 'react-native-touchable-scale';

//import OrangeHeader from '.../components/orangeheader'

export default class ViewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,

      DATA: [null],
      width: Dimensions.get('window').width / 2,
      height: Dimensions.get('window').height / 2,
    };
  }
  move = () => {
    this.props.navigation.navigate('topTab');
    // addCard={()=>this.props.navigation.navigate('addCard')}
    //cardDetails={()=>this.props.navigation.navigate('cardDetails')}
  };
  renderItem = ({item}) => {
    return (
      <Block
        color={theme.colors.gray4}
        card
        middle
        flex={0.5}
        style={[
          {marginVertical: 15},
          item.left ? styles.styleRight : styles.styleLeft,
        ]}>
        <TouchableScale
          style={{borderRadius: theme.sizes.radius, margin: 10}}
          activeScale={0.7}
          friction={7}
          onPress={() =>
            navigation.navigate('OfferDetails', {
              item: item,
              active: true,
            })
          }>
          ٍ <Image style={styles.imgOnCard} source={item.image} />
        </TouchableScale>
      </Block>
    );
  };
  render() {
    return (
      <Block color={theme.colors.gray4}>
        <Block
          card
          flex={0.75}
          color={theme.colors.primary}
          style={{margin: 10, marginTop: 20}}>
          <Block flex={0.25} middle style={{marginLeft: 5}} card>
            <Text regular h1 left gray4>
              {' '}
              Credit Cards
            </Text>
          </Block>
          <Block middle center>
            <FlatList
              horizontal={true}
              data={this.state.DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => [
                <View>
                  {item === null ? (
                    <View
                      style={{
                        flex: 0.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderStyle: 'dashed',
                        borderWidth: 2,
                        padding: 80,
                        borderRadius: theme.sizes.radius,
                        borderColor: '#ADACF1',
                        margin: 25,
                      }}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('addCard')}>
                        <Text style={{color: '#8D8D8D'}}>ADD CARD</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View
                      style={{
                        flex: 0.5,
                        margin: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: theme.sizes.radius,
                      }}>
                      <TouchableOpacity>
                        <ImageBackground
                          style={{width: 350, height: 200}}
                          source={item.image}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>,
              ]}
            />
          </Block>
        </Block>

        <Block flex={0.2} row left middle>
          <Block
            color="primary"
            flex={0.65}
            center
            middle
            card
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              marginVertical: 30,
            }}>
            <Button color="primary"  onPress={()=>this.props.navigation.navigate('addMoney')}>
              <Text center gray4 h3>
                {' '}
                Manage Your Wallet{' '}
              </Text>
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  styleLeft: {
    marginLeft: 20,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    alignItems: 'flex-start',
  },
  styleRight: {
    marginRight: 20,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    alignItems: 'flex-end',
  },

  imgOnCard: {
    width: 350,
    height: 200,
    borderRadius: 20,
  },
});

//  const a = <CardsFlatList  DATA={this.state.DATA}  />
// <View style={{flex:1}}>
//                    <OrangeHeader title="Wallet" move={this.move} com={a} />

//           </View>
