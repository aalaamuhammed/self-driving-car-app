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

export default (ViewCard = ({navigation}) => {
  const [visibility, setVisibility] = useState(false);

  const [counter, setCounter] = useState(1);
  const [DATA, setDATA] = useState([{id: 0}]);
  const [width, setWidth] = useState(Dimensions.get('window').width / 2);
  const [height, setHeight] = useState(Dimensions.get('window').height / 2);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Block color={theme.colors.primary}  style={{flex:1}}>
        {/* <Block
          card
          flex={2}
          color={theme.colors.primary}
          style={{borderTopLeftRadius:0,borderTopRightRadius:0}}
          > */}
        <Block flex={0.5} middle style={{marginLeft: 5}}>
          <Text regular h1 left gray4>
            {' '}
            Credit Cards
          </Text>
        </Block>
        <Block center  flex={2}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={DATA}
            keyExtractor={(item, index) => item + index}
            contentContainerStyle={{justifyContent: 'center'}}
            renderItem={({item, index}) => [
              <Block
                card
                color={theme.colors.gray4}
                style={{
                  width: 300,
                  height: 365,
                  justifyContent: 'space-around',
                  padding: 10,

                  //  alignSelf: 'center',
                }}>
                <Block flex={0.3} row bottom style={{marginBottom: 10}}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                    //  flex: 1,
                      alignSelf: 'flex-end',
                      margin: 1,
                      padding:2,
                      
                      
                    }}
                    onPress={() => {
                      if (DATA.length > 1) {
                        console.log('hhhshshshs');
                        const id = item.id;
                        console.log(id, index);
                        const newList = DATA.filter(item => item.id !== id);
                        setDATA(newList);
                        setTimeout(() => {
                          console.log(DATA);
                        }, 2000);
                      }
                    }}>
                    <Icon
                      name="minuscircleo"
                      size={20}
                      style={{color: theme.colors.primary}}
                    />
                 
                  </TouchableOpacity>
                  <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    const newData = DATA.concat({id: counter});
                    setDATA(newData);
                    setCounter(counter => counter + 1);
                    setTimeout(() => {
                      console.log(DATA);
                    }, 2000);
                  }}
                  style={{
                   // flex: 1,
                    alignSelf: 'flex-end',
                    margin: 1,
                    padding: 2,
                    //flexDirection:'row',
                    
                  }}>
                  <Icon
                      name="pluscircleo"
                      size={20}
                      
                      style={{
                        color: theme.colors.primary,
                        alignSelf: 'flex-end',
                      }}
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
                  <Block style={{marginHorizontal: 50}}>
                    <Button gradient>
                      <Text center title white>
                        Done
                      </Text>
                    </Button>
                  </Block>
                </Block>
              </Block>,
            ]}
          />
        </Block>
        {/* <Block flex={1} color={'white'} middle>
          <Block
            flex={1}
            card
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,

              //  marginVertical: 55,
            }}>
            <Button
              gradient
              //  style={{flex:1}}
              onPress={() => {
                navigation.navigate('addMoney');
              }}>
              <Text center gray4 h3>
                {' '}
                Manage Your Wallet{' '}
              </Text>
            </Button>
          </Block>
          <Block
            flex={1}
            card
            style={
              {
                //  marginVertical: 55,
                //  marginHorizontal:10,
              }
            }>
            <Button
              gradient
              //  style={{flex:1}}
              onPress={() => {
                navigation.navigate('addMoney');
              }}>
              <Text center gray4 h3>
                {' '}
                Manage Your Wallet{' '}
              </Text>
            </Button>
          </Block>
            </Block>*/}
      </Block>
 
      {/* {/* <Block middle center style={{flex:.3}}>
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
          </Block> */}

      {/* </Block> */}
    </ScrollView>
  );
});

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
