import React, {useState} from 'react';
import {
  StyleSheet,
  
  View,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
//import Icon from 'react-native-vector-icons/FontAwesome';
import i20 from '_assets/images/i20.png';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios'
import {apis,theme} from '../../constants'
import {OrangeHeader} from '_molecules';
import {Button, Block, Text} from '_atoms';
export default  App=({navigation})=>  {
  
    const Height = Dimensions.get('window').height
    const [activeSections, setActiveSections] = useState([])
    const [name, setName] = useState('Issue in the app')
    const [CONTENT, setCONTENT] = useState([ {
      title: 'Issue in the app',
      content: [
        'Issue in the app',
        'Issue in the cars',
        'Issue in the service',
      ],
    }])
   

    const setSections = sections => {
      setActiveSections(sections.includes(undefined) ? [] : sections);
    };

    const renderHeader = (section, _, isActive) => {
      return (
        <Animatable.View
          duration={400}
          style={[styles.header, isActive ? styles.active : styles.inactive]}
          transition="backgroundColor">
          <View 
          style={{margin: 10}}
          >
            <Animatable.Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                
              }}
              animation={'bounceIn'}>
              {section.title}
            </Animatable.Text>
          </View>
          {!isActive ? (
            <Icon
              name="right"
              style={{alignSelf: 'center',marginRight:5}}
              size={20}
              color={theme.colors.primary}
            />
          ) : (
            <Icon
              name="minus"
              style={{alignSelf: 'center',marginRight:5}}
              size={20}
              color={theme.colors.primary}
            />
          )}
        </Animatable.View>
      );
    };
  
    const updateItem = (index, itemAttributes) => {
      const arrayCopy = [...CONTENT];
      console.log(arrayCopy, 'before');
      arrayCopy[index].title = itemAttributes.title;
      console.log(arrayCopy, 'after');
      setCONTENT(arrayCopy);
    };
  
    const renderContent = (section, _, isActive) => {
      return (
        <Animatable.View
          duration={400}
          style={[styles.content]}
          containerStyle={{flex: 1, borderWidth: 5}}>
          {section.content.map(element => (
            <TouchableOpacity onPress={() => updateItem(0, {title: element})}>
              <Text>{element}</Text>
            </TouchableOpacity>
          ))}
        </Animatable.View>
      );
    };
  // const postIssue=async()=>{
  //   axios
  //   .post(apis.issues_api, {email: this.state.Email})
  //   //schema form {"userId", "label", "body"}
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(err => {
  //     console.error('Error', err);
  //     this.setState({email_existence: true});
  //   });
  // }
  
   

    return (
      <ScrollView contentContainerStyle={{flex:1}}>
      <Block bottom middle color={'primary'}>
      <Block flex={0.2} row right>
        <Block
          middle
          card
          flex={0.5}
          color={'rgba(255,255,255,.6)'}
          style={{
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            marginVertical: 30,
          }}>
          <Text h1 center regular gray4>
             Issue
          </Text>
        </Block>
      </Block>
      <Block
        flex={0.75}
        card
       
        color="white"
        style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
          <View>
           <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            touchableProps={{marginBottom: 5, activeOpacity: 0.8}}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
          //  underlayColor={'#ffff'}
            onChange={setSections}
            sectionContainerStyle={{
              margin: 20,
             
              borderWidth: .5,
              borderColor: theme.colors.gray2,
              borderRadius: theme.sizes.radius,
             
            }}
          />
        </View>
        <View
          style={{
            height: Height / 4.5,
            margin: 20,
            marginVertical: 5,
            borderRadius: theme.sizes.radius,
            borderWidth:.5,
            borderColor:theme.colors.gray2,
            
          }}>
          <TextInput
            onChangeText={text => {
              console.log(text);
            }}
           placeholder={'write your issue'}
            multiline={true}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            //   keyboardType={item.keyboardType}
            style={{marginLeft:5}}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: 7,
          }}>
          <Block middle flex={1} margin={[0, theme.sizes.padding]}>
          <Button gradient>
            <Text center  title white>
              Send
            </Text>
          </Button>
        </Block>
        </View>
        

          </Block>
          </Block>

      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',

  },
  Container: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#FF8900',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'flex-start',

  },

  headerText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,

  },




});
