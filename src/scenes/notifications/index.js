import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import {OrangeHeader} from '_molecules';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import {Button, Block, Text} from '_atoms';
import {theme,apis} from '../../constants';
import * as axios from 'axios';
import Icon2 from 'react-native-vector-icons/Octicons';



export default class App extends Component {
  state = {
    activeSections: [],
    modalVisibility: false,
    selectedItem: '',
    verify:false,
    applied:false,
     CONTENT : [
    ]
  };
  openModal = () => {
    return(
      <Modal animationType="fade" transparent={true} visible={this.state.modalVisibility}>
      <View
        style={{
          backgroundColor: 'rgba(67, 39, 110,.7)',
          flex: 1,
          justifyContent: 'center',
        }}>
        {(!this.state.verify)?
        <View style={{backgroundColor: 'white',flex:.2,marginHorizontal:20,borderRadius:theme.sizes.radius}}>
          <View style={{flex:1,margin:15}}>
            <Text regular>
              Apply {this.state.selectedItem.description} from your Account?
            </Text>
          </View>
          <View style={{flexDirection:'row',flex:1,justifyContent:'space-evenly',alignItems:'center',marginBottom:15}}>
            <Block flex={.3} >
              <Button gradient 
              onPress={()=>{
                this.setState({verify:true,applied:true}) 
                console.log(this.state.verify)
                }}>
                <Text center regular white>
                  Apply
                </Text>
              </Button>
            </Block>
            <Block flex={.3}>
              <Button gradient onPress={()=>this.setState({modalVisibility:false})}>
                <Text center regular white>
                  Cancel
                </Text>
              </Button>
            </Block>
          </View>
        </View>
        :
        <View style={{flex: 1, justifyContent: 'center'}}>
        <Icon2
          name="verified"
          size={150}
          color="#F6F7F8"
          style={{alignSelf: 'center'}}
        />
        {this.visibilityPeriod()}
      </View>}
      </View>
    </Modal>

    )
  };
   visibilityPeriod=()=>{
    setTimeout(() => {
        this.setState({modalVisibility:false,verify:false})
      
      }, 1500)
}
  renderItem = ({item}) => {
    return (    
      <TouchableOpacity
        style={styles.header}
        activeOpacity={0.8}
        onPress={() =>
          this.setState({
            modalVisibility: true,
            selectedItem: item,
            applied:false
          })
        }>
        <View style={{margin: 10,flex:4}}>
          <View style={{flexDirection:'row'}}>
            {(this.state.applied&&(item._id===this.state.selectedItem._id))?
            <Icon2
            name="verified"
            size={13}
            color={theme.colors.primary}
            style={{alignSelf: 'center',marginRight:2}}
          />:<Text>{'  '}</Text>}
          <Text
            style={{
              //  textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {item.description}.
          </Text>
          </View>
          
          <Text>{'   '}limited Price Per Ride {item.limitedPricePerRide}.</Text>
          <Text>{'   '}number of Gift Codes {item.numberOfGiftCodes}.</Text>
          <Text>{'   '}number of Rides {item.numberOfRides}.</Text>
          <Text>{'   '}price {item.price}.</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: theme.colors.primary,
            borderRadius: theme.sizes.radius,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,.6)',
              flex: 1,
              justifyContent: 'center',
              borderRadius: theme.sizes.radius,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}>
            <Text
              style={[
                //styles.headerText,
                {color: '#fff',transform: [{rotateZ: '90deg'}]},
              ]}>
              {item.price}L.E
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  get = async () => {
    try {
     
      const response = await axios.get(
        apis.packages_api,
      );
      this.setState({CONTENT: response.data});
   console.log(response.data)
   console.log('CONTENT',this.state.CONTENT)
     
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = () => {
    
      this.get();
    
  };


  render() {
    const a = (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.CONTENT}
          style={{margin: 10}}
          renderItem={({item}) => this.renderItem({item})}
          keyExtractor={(item, index) => {
            return item._id.toString();
          }}
        />
      </View>
    );
    return (
      <Block bottom middle color={'primary'}>
        <Block flex={0.2} row right>
          <Block
            middle
            card
            flex={0.55}
            color={'rgba(255,255,255,.6)'}
            style={{
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              marginVertical: 30,
            }}>
            <Text h1 center regular gray4>
              Packages
            </Text>
          </Block>
        </Block>
        <Block
          flex={0.75}
          card
          middle
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            marginBottom: 2,
          }}>
          {a}
          {this.openModal()}
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
 
 
  header: {
    backgroundColor: '#fff',
    // padding: 10,
    margin: 10,
    flexDirection: 'row',
    borderRadius: theme.sizes.radius,
  //  justifyContent: 'space-between',
  },

  
});
