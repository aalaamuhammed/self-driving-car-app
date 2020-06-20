import React, {useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Dimensions} from 'react-native';
import {Button, Block, Text} from '_atoms';
import {theme} from '../../../constants';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/AntDesign';

//import OrangeHeader from '.../components/orangeheader'

export default ViewCard = ({navigation}) => {
  const [visibility, setVisibility] = useState(false);
 
  const [counter, setCounter] = useState(1)
  const [DATA, setDATA] = useState([{id:0}]);
  const [width, setWidth] = useState(Dimensions.get('window').width / 2);
  const [height, setHeight] = useState(Dimensions.get('window').height / 2);

  const move = () => {
    navigation.navigate('topTab');
    // addCard={()=>this.props.navigation.navigate('addCard')}
    //cardDetails={()=>this.props.navigation.navigate('cardDetails')}
  };
  const renderItem = ({item}) => {
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
           <Image style={styles.imgOnCard} source={item.image} />
        </TouchableScale>
      </Block>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
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
          <Block center>
            <FlatList
              horizontal
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              snapToAlignment="center"
              data={DATA}
              keyExtractor={(item, index) => item + index}
              style={{margin: 17}}
              renderItem={({item,index}) => [
                <Block
                  card
                  color={theme.colors.gray4}
                  style={{
                    width: 300,
                    height: 365,
                    justifyContent: 'space-around',
                    padding: 10,
                    alignSelf: 'center',
                  }}>
                    <Block flex={.3} style={{marginBottom:10 }}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={{flex: 1,alignSelf:'flex-end',margin:2,padding:5,justifyContent:'center'}}
                      onPress={()=>{
                        if(DATA.length>1){
                        console.log('hhhshshshs')
                         const id =item.id
                         console.log(id,index)
                        const newList = DATA.filter((item) => item.id !== id);
                        setDATA(newList);
                        setTimeout(() => {
                          console.log(DATA)
                        }, 2000);}
                      }}>
                      <Icon
                        name="minuscircleo"
                        size={20}
                        style={{color:theme.colors.primary}}
                       
                      />
                    </TouchableOpacity>
                    </Block>
                   
                 
                  <Block flex={3.5}>
                  <TextInput
                    // onSubmitEditing={this.props.focusNext}
                    style={styles.textInput}
                    onFocus={res => {
                      console.log(res.key, ' is focus');
                    }}
                    keyboardType="email-address"
                    autoCorrect={false}
                    multiline={false}
                    placeholder="Card Type"
                    //   onBlur={}//func
                    //value={}
                    onChangeText={val => {}}
                  />
                  <TextInput
                    // onSubmitEditing={this.props.focusNext}
                    style={styles.textInput}
                    onFocus={res => {
                      console.log(res.key, ' is focus');
                    }}
                    keyboardType="email-address"
                    autoCorrect={false}
                    multiline={false}
                    placeholder="Cardholder Name"
                    //   onBlur={}//func
                    //value={}
                    onChangeText={val => {}}
                  />
                 
                   <TextInput
                    // onSubmitEditing={this.props.focusNext}
                    style={styles.textInput}
                    onFocus={res => {
                      console.log(res.key, ' is focus');
                    }}
                    keyboardType="email-address"
                    autoCorrect={false}
                    multiline={false}
                    placeholder="Card Number"
                    //   onBlur={}//func
                    //value={}
                    onChangeText={val => {}}
                  />
                  <TextInput
                    // onSubmitEditing={this.props.focusNext}
                    style={styles.textInput}
                    onFocus={res => {
                      console.log(res.key, ' is focus');
                    }}
                    keyboardType="email-address"
                    autoCorrect={false}
                    multiline={false}
                    placeholder="Expiration Date"
                    //   onBlur={}//func
                    //value={}
                    onChangeText={val => {}}
                  />
                  <TextInput
                    // onSubmitEditing={this.props.focusNext}
                    style={styles.textInput}
                    onFocus={res => {
                      console.log(res.key, ' is focus');
                    }}
                    keyboardType="email-address"
                    autoCorrect={false}
                    multiline={false}
                    placeholder="CVV"
                    style={{marginBottom: 7}}
                    //   onBlur={}//func
                    //value={}
                    onChangeText={val => {}}
                  />
                  <Block  style={{marginHorizontal:50}}>
                    <Button color='primary'>
                      <Text center regular white>Done</Text>
                    </Button>
                    </Block>


                  </Block>
                </Block>,
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
            <Button
              color="primary"
              onPress={() => {
               navigation.navigate('addMoney')
               
              }}>
              <Text center gray4 h3>
                {' '}
                Manage Your Wallet{' '}
              </Text>
            </Button>
          </Block>
          <Block middle center style={{flex:.3}}>
            <Icon 
            name='pluscircleo' 
            size={60}
            onPress={()=>{ 
             
              const newData = DATA.concat({id:counter});
              setDATA(newData)
              setCounter(counter=>counter+1)
              setTimeout(() => {
                console.log(DATA)
              }, 2000);}}
               
            style={{color:theme.colors.primary,alignSelf:'flex-end'}}/>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

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

/*
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
            />*/
