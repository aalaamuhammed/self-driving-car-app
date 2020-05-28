import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
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

import {OrangeHeader} from '_molecules';

export default (About = ({navigation}) => {
  const [Height, setHeight] = useState(Dimensions.get('window').height);
  const [activeSections, setActiveSections] = useState([]);
  const [CONTENT, setCONTENT] = useState([
    {
      title: 'Issue in the app',
      content: [
        'Issue in the app',
        'Issue in the cars',
        'Issue in the service',
      ],
    },
  ]);
  const [name, setName] = useState('Issue in the app');

  //check error here

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <View style={{margin: 10}}>
          <Animatable.Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
            }}
            animation={'bounceIn'}>
            {section.title}
          </Animatable.Text>
        </View>
        {!isActive ? (
          <Icon
            name="right"
            style={{alignSelf: 'center'}}
            size={25}
            color="#FF8900"
          />
        ) : (
          <Icon
            name="minus"
            style={{alignSelf: 'center'}}
            size={25}
            color="#FF8900"
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

  const a = (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Accordion
          activeSections={activeSections}
          sections={CONTENT}
          touchableComponent={TouchableOpacity}
          touchableProps={{marginBottom: 5, activeOpacity: 0.8}}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          underlayColor={'#ffff'}
          onChange={setSections}
          sectionContainerStyle={{
            margin: 20,
            shadowColor: '#000',

            borderWidth: 1,
            borderColor: '#FF8900',
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2,
            elevation: 1.5,
          }}
        />
      </View>
      <View
        style={{
          height: Height / 4.5,
          margin: 20,
          marginVertical: 5,
          borderRadius: 2,
          shadowColor: '#000',

          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 5.22,
          elevation: 2,
        }}>
        <TextInput
          //   placeholder = {item.title}
          onChangeText={text => {
            console.log(text);
          }}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          //   keyboardType={item.keyboardType}
          style={{}}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 7,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#FF8900',
            borderRadius: 10,
            alignItems: 'center',
            flex: 1,
            margin: 10,
          }}
          onPress={() => navigation.navigate('ListOfOffers')}>
          <Text
            style={{
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 20,
              color: 'white',
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <OrangeHeader
        com={a}
        title={'Issues'}
        move={() => navigation.toggleDrawer()}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    //   alignItems: 'center',
    // justifyContent: 'center',
    //  borderWidth:5
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
    backgroundColor: '#fff',
    //  padding: 10,
    alignItems: 'flex-start',
    // borderWidth:.5,
    borderRadius: 10,
  },

  headerText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  textStyle: {
    fontSize: 45,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecorationStyle: 'double',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#F6F7F8',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconStyle: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingEnd: 15,
    paddingStart: 15,
  },
  animatedHeaderContainer: {
    //position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
