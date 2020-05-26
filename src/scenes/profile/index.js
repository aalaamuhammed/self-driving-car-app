import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  TextInput,
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Animated,
  Image,
  FlatList,
  ImageBackground,
  Picker,
} from 'react-native';
// import DatePicker from 'react-native-date-picker';
import CheckBox from 'react-native-check-box';
import i20 from '_assets/images/i20.png';
import Icon from 'react-native-vector-icons/Feather';
import {apis} from '../../constants';
import axios from 'axios';

//import {  } from 'react-native-gesture-handler';
const HEADER_MIN_HEIGHT = 100;
const HEADER_MAX_HEIGHT = 150;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

 const Profile = () => {
  // states
  const [id, setId] = useState(0);
  const [user, setUser] = useState({
    name: null,
    mail: null,
    mobile: null,
    gender: null, //0 => female 1=> male
    birthDate: null,
  });
  const [data, setData] = useState([
    {
      type: 'list',
      title: 'Name :',
      keyboardType: 'default',
      key: 0,
      color: '#FF8900',
      placeholder: 'write your name',
    },
    {
      type: 'list',
      title: 'E-mail :',
      keyboardType: 'default',
      key: 1,
      color: '#FF8900',
      placeholder: 'write your mail',
    },
    {
      type: 'list',
      title: 'Mobile Number :',
      keyboardType: 'numeric',
      key: 2,
      placeholder: 'write your mobile number',
    },
    {
      type: 'list',
      title: 'Date of birth :',
      keyboardType: 'picker',
      key: 3,
    },
    {type: 'list', title: 'Gender :', keyboardType: 'check-box', key: 4},
    {type: 'button'},
  ]);
  const [view, setView] = useState(false);
  const [female, setFemale] = useState(false);
  const [male, setMale] = useState(false);
  const [edit, setEdit] = useState(false);
  const [pickerText, setPickerText] = useState('PickerText');

  // Constants

  const scrollYAnimatedValue = new Animated.Value(0);
  const windowWidth = Dimensions.get('window').width / 3.3;
  const windowHeight = Dimensions.get('window').height / 12;

  const pickerModal = TorF => {
    setView(TorF);
  };
  const saveDate = (item, text) => {
    if (item.key === 0) {
      setUser(prevState => ({
        ...prevState.user, // keep all other key-value pairs
        name: text,
      }));
    }

    // return new object jasper object
    else if (item.key === 1) {
      setUser(prevState => ({
        ...prevState.user, // keep all other key-value pairs
        mail: text,
      }));
    }

    // return new object jasper object

    if (item.key === 2) {
      setUser(prevState => ({
        ...prevState.user, // keep all other key-value pairs
        mobile: text,
      }));
    }
    // return new object jasper object

    if (item.key === 4) {
      setUser(prevState => ({
        ...prevState.user, // keep all other key-value pairs
        gender: text,
      }));
    }
    // return new object jasper object

    if (item.key === 3) {
      setUser(prevState => ({
        ...prevState.user, // keep all other key-value pairs
        birthDate: text,
      }));
    }
  };
  const render_Item = item => {
    return item.type != 'button' ? (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',

          borderRadius: 0.5,
          margin: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 5,

          elevation: 0.5,
          padding: 5,
          paddingHorizontal: 10,
        }}>
        <Text style={{alignSelf: 'center', fontSize: 15}}>{item.title} </Text>
        {item.keyboardType != 'picker' && item.keyboardType != 'check-box' ? (
          <TextInput
            placeholder={item.placeholder}
            onChangeText={text => {
              saveDate(item, text);
            }}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={item.keyboardType}
            style={{flex: 1}}
          />
        ) : item.keyboardType === 'picker' ? (
          <View style={{flex: 1}}>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                flex: 1,
                paddingVertical: 15,
                padding: 3,
                borderBottomColor: item.color,
              }}
              onPress={() => {
                pickerModal(true);
              }}>
              <Text>{user.birthDate}</Text>
            </TouchableOpacity>
            {view ? (
              <Modal animationType="fade" transparent={true} visible={view}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgba(255, 137, 0 ,.1)',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => pickerModal(false)}>
                  <View
                    style={{
                      flex: 0.5,
                      borderColor: 'white',
                      borderWidth: 5,
                      borderRadius: 20,
                    }}>
                    {/* <DatePicker
   fadeToColor='none'
   style={
     {
     flex:1,
     backgroundColor:'white',
     
    }}
     date={date}
     mode='date'
     onDateChange={(date)=>
      { setDate(date)
      const text=String(date).substring(4,15)
      setPickerText(text)
      color='black'
       saveDate(item,text)
       console.log(item.key, text)
    }}
   /> */}
                  </View>
                </TouchableOpacity>
              </Modal>
            ) : null}
          </View>
        ) : item.keyboardType === 'check-box' ? (
          <View style={{flexDirection: 'row', flex: 1}}>
            <CheckBox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setMale(prevMale => !prevMale);
                setFemale(false);
                saveDate(item, '1');
              }}
              isChecked={male}
              leftText={'Male'}
              leftTextStyle={{fontSize: 15}}
              checkBoxColor={'gray'}
              checkedCheckBoxColor={'orange'}
            />

            <CheckBox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setMale(false);
                setFemale(prevFemale => !prevFemale);

                saveDate(item, '0');
              }}
              isChecked={female}
              leftText={'female'}
              leftTextStyle={{fontSize: 15}}
              checkBoxColor={'gray'}
              checkedCheckBoxColor={'orange'}
            />
          </View>
        ) : null}
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#FF8900',
            borderRadius: 10,
            flex: 1,
            alignItems: 'center',
          }}
          onPress={() => props.navigation.navigate('ListOfOffers')}>
          <Text
            style={{
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 20,
              color: 'white',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getUserData = async () => {
    const url = apis.users_api + `/{${id}}`;
    console.log(url);
    try {
      const response = await axios.get(apis.users_api);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // componentDidMount(){
  //   getUserData()
  // }

  const scale1 = scrollYAnimatedValue.interpolate({
    inputRange: [0, 120 - 90],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });
  const translateYI = scrollYAnimatedValue.interpolate({
    inputRange: [0, 120 - 90],
    outputRange: [0, -(windowHeight + 10)],
    extrapolate: 'clamp',
  });
  const translateXI = scrollYAnimatedValue.interpolate({
    inputRange: [0, 120 - 90],
    outputRange: [0, -(2 * windowWidth - windowHeight)],
    extrapolate: 'clamp',
  });
  const translateYT = scrollYAnimatedValue.interpolate({
    inputRange: [0, 120 - 90],
    outputRange: [0, -(2 * windowHeight + 25)],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={styles.mainContainer}>
      <View style={{flex: 1, padding: 10, justifyContent: 'center'}}>
        <AnimatedFlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT + 50}}
          data={data}
          renderItem={({item}) => render_Item(item)}
          keyExtractor={(item, index) => item + index}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: scrollYAnimatedValue}},
              },
            ],
            {useNativeDriver: true}, // <-- Add this
          )}
        />
      </View>

      <Animated.View
        style={[
          styles.animatedHeaderContainer,
          {height: 120, backgroundColor: '#FF8900'},
        ]}
      />

      <Animated.View
        style={{
          position: 'absolute',
          top: windowHeight,
          left: windowWidth,
          width: windowWidth + windowHeight,
          height: windowHeight + windowWidth,
          alignItems: 'center',
        }}>
        <Animated.Image
          source={i20}
          style={{
            width: '70%',
            height: '70%',
            borderRadius: 10,
            transform: [
              {scale: scale1},
              {translateY: translateYI},
              {translateX: translateXI},
            ],
          }}
        />
        <Animated.View style={{transform: [{translateY: translateYT}]}}>
          <Text style={[styles.textStyle]}>{user.name}</Text>
          <Text
            style={[
              styles.textStyle,
              {color: 'gray', fontWeight: '200', fontSize: 15},
            ]}>
            {user.mail}
          </Text>
        </Animated.View>
      </Animated.View>
      <Modal animationType="fade" transparent={true} visible={!edit}>
        <View style={{backgroundColor: 'rgba(231, 230, 230,.3)', flex: 1}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setEdit(true)}
            style={{alignSelf: 'flex-end', margin: 5}}>
            <Icon name="edit" size={25} color="#F6F7F8" />
          </TouchableOpacity>
        </View>
      </Modal>
    </Animated.View>
  );
};

export default Profile

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },

  textStyle: {
    fontSize: 18,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationStyle: 'dotted',
    fontWeight: 'normal',
    fontWeight: '700',
    textAlignVertical: 'center',
  },
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // flexDirection: 'row',

    // alignItems: 'center',
  },
  animatedHeaderContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: Platform.OS == 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    // justifyContent:'space-between',
    padding: 10,
  },
});
