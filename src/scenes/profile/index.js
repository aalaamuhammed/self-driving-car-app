import React, {useState, Fragment} from 'react';
import ImagePicker from 'react-native-image-picker';
import * as Animatable from 'react-native-animatable';
import {
  Modal,
  Picker,
  TouchableOpacity,
  TextInput,
  AppRegistry,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Animated,
  Image,
  Alert,
  FlatList,
  ImageBackground,
  ScrollView,
 // Button,
} from 'react-native';
import {
  Block,
  Text,
   Button
} from '_atoms';
import {theme} from '../../constants';
// import DatePicker from 'react-native-date-picker';
import CheckBox from 'react-native-check-box';
import i20 from '_assets/images/i20.png';
import Icon from 'react-native-vector-icons/Feather';
import {apis} from '../../constants';
import axios from 'axios';
import * as yup from 'yup';
import {Formik} from 'formik';

//import {  } from 'react-native-gesture-handler';
const HEADER_MIN_HEIGHT = 100;
const HEADER_MAX_HEIGHT = 150;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Profile = () => {
  // states
  const [id, setId] = useState(0);
  const [userMobile, setUserMobile] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userBirthDate, setUserBirthDate] = useState(null);
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
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
      placeholder: 'YYY-MM-DD',

      //keyboardType: 'picker',
      key: 3,
    },
    {type: 'list', title: 'Gender :', keyboardType: 'check-box', key: 4},
    {type: 'button'},
  ]);
  const [view, setView] = useState(false);
  const [female, setFemale] = useState(false);
  const [avatarSource, setAvatarSource] = useState(null);
  const [edit, setEdit] = useState(false);

  // Constants

  const scrollYAnimatedValue = new Animated.Value(0);
  const windowWidth = Dimensions.get('window').width / 3.3;
  const windowHeight = Dimensions.get('window').height / 12;

  const saveDate = (item, text) => {
    switch (item.key) {
      case 0:
        setUserName(text);
      case 1:
        setUserMail(text);
      case 2:
        setUserMobile(text);
      case 4:
        setUserGender(text);
      case 3:
        setUserBirthDate(text);
    }
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
  const [selectedValue, setSelectedValue] = useState('Male');
  const scale1 = scrollYAnimatedValue.interpolate({
    inputRange: [0, 120 - 90],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });


  const chooseImage=()=> 
   {const options = {
   
    customButtons: [{ name: 'remove', title: 'Remove Image' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
   // console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      setAvatarSource(null)
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
  
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  
     setAvatarSource(source)
    }
  });
}
  

  return (
    <View
      style={[styles.mainContainer, {backgroundColor: theme.colors.primary}]}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginTop: HEADER_MAX_HEIGHT - 25,
          padding: 10,
          paddingTop:20,
          borderRadius: 20,
          backgroundColor: theme.colors.white,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 60,
            borderRadius: theme.sizes.radius,
          }}
          data={data}
          keyExtractor={(item, index) => item + index}
          >
          <Formik
            initialValues={{
              email: '',
              name: '',
              phone: '',
              gender:''
            }}
            onSubmit={values => console.log(values)}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email()
                .required(),
              name: yup
                .string()
                .matches(
                  /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/,
                  'please enter only string',
                )
                .min(6)
                .max(225),
              phone: yup
                .string()
                .min(11)
                .max(11)
                .matches(/^[0-9]*$/, 'please enter only numbers'),
              gender:yup.string()
            })}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
              setFieldValue
            }) => (
              <Fragment>
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderRadius: 15,
                    margin: 5,
                    paddingHorizontal: 10,
                    borderColor: theme.colors.gray,
                  }}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  keyboardType="email-address"
                  placeholder="E-mail"
                />
                {touched.email && errors.email && (
                  <Animatable.View animation="bounceIn">
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'red',
                        paddingHorizontal: 10,
                      }}>
                      {errors.email}
                    </Text>
                  </Animatable.View>
                )}
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderRadius: 15,
                    margin: 5,
                    paddingHorizontal: 10,
                    borderColor: theme.colors.gray,
                  }}
                  keyboardType="default"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => {
                    setFieldTouched('name');
                    console.log('onBlur');
                  }}
                  placeholder="Name"
                />
                {touched.name && errors.name && (
                  <Animatable.View animation="bounceIn">
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'red',
                        paddingHorizontal: 10,
                      }}>
                      {errors.name}
                    </Text>
                  </Animatable.View>
                )}
                <TextInput
                  style={{
                    borderWidth: 0.5,
                    borderRadius: 15,
                    margin: 5,
                    paddingHorizontal: 10,
                    borderColor: theme.colors.gray,
                  }}
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={() => setFieldTouched('phone')}
                  keyboardType="phone-pad"
                  placeholder="Phone Number"
                />
                {touched.phone && errors.phone && (
                  <Animatable.View animation="bounceIn">
                    <Text
                      style={{
                        fontSize: 10,
                        color: 'red',
                        paddingHorizontal: 10,
                      }}>
                      {errors.phone}
                    </Text>
                  </Animatable.View>
                )}

                
                 <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    borderWidth: 0.5,
                    borderRadius: 15,
                    margin: 5,
                    paddingHorizontal: 0,
                    borderColor: theme.colors.gray,
                  }}>
                  <Picker
                    selectedValue={selectedValue}
                    style={{height: 50, width: 120, color: '#A6ACAF',borderWidth:2,borderRadius:5}}
                    itemStyle={{borderWidth:2,borderRadius:5}}
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue('gender', itemValue)
                      setSelectedValue(itemValue)
                      
                    }}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                </View>
                <Block  flex={1} row style={{justifyContent:'space-between'}} margin={[0, theme.sizes.padding]}>
                <Button style={{width:150}} gradient onPress={chooseImage}>
            <Text center  title white>
              Change Image
            </Text>
          </Button>
          <Button style={{width:90}} gradient onPress={handleSubmit}>
            <Text center  title white>
              Done
            </Text>
          </Button>
         
        </Block>
               
              </Fragment>
            )}
          </Formik>
          
          
        
        </ScrollView>
      </View>

      {avatarSource?
      <View
        style={{
          position: 'absolute',
          top: windowHeight+10,
          left: windowWidth - 10,
          width: windowWidth + windowHeight,
          height: windowHeight + windowWidth,
          alignItems: 'center',
        }}>
                <Image
                source={avatarSource}
               style={{
                 width: '70%',
                 height: '70%',
                 borderRadius: 10, 
               }}
             />
      </View>
      : <View
      style={{
        position: 'absolute',
        top: windowHeight-35,
        left: windowWidth -20,
        width: windowWidth ,
        height: windowHeight ,
      borderStyle:'dashed',
      borderWidth:2,
      padding:70,
      borderRadius:5,
      borderColor:'#ADACF1',
      margin:25,
      alignItems:'center',
      justifyContent:'center'
     }}>
      <TouchableOpacity  style={{width:150,height:150,alignItems:'center',
      justifyContent:'center'}} onPress={chooseImage}>
         <Text style={{fontSize:18,color:theme.colors.gray}}>Add Image</Text> 
      </TouchableOpacity>          
     </View>
      }
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationStyle: 'dotted',
    fontWeight: 'bold',
    color: 'gray',
    textAlignVertical: 'center',
  },
  mainContainer: {
    flex: 1,
  },
  animatedHeaderContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: Platform.OS == 'ios' ? 20 : 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 10,
  },
});
