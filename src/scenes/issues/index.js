import React, { Component } from 'react';
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
import Icon from 'react-native-vector-icons/AntDesign';

import i20 from '_assets/images/i20.png'


import { OrangeHeader } from '_molecules';




export default class App extends Component {
  constructor(props) {
    super(props)
    this.Height =Dimensions.get('window').height,
    this.state = {
     
      activeSections: [],
      CONTENT: [
        {
          title: 'Issue in the app',
          content: [
            'Issue in the app',
            'Issue in the cars',
            'Issue in the service']
        },
      ],
      name: 'Issue in the app'

    }
  }

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        {(!isActive)?
        <Icon name='left' style={{padding:5}} size={10} color='#FF8900' />
        :
        <Icon name='minus' size={10} color='#FF8900' />}
      </Animatable.View>
    );
  };

  updateItem = (index, itemAttributes) => {
    this.setState({
      CONTENT: [
        ...this.state.CONTENT.slice(0, index),
        Object.assign({}, this.state.CONTENT[index], itemAttributes),
        ...this.state.CONTENT.slice(index + 1)
      ]
    });
  }



  renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content]}
        containerStyle={{ flex: 1, borderWidth: 5}}>
        {section.content.map((element) =>
          <TouchableOpacity  onPress={() => this.updateItem(0, { title: element })}>
            <Text>{element}</Text>
          </TouchableOpacity>)


        }



      </Animatable.View>
    );
  }



  render() {
    const { multipleSelect, activeSections } = this.state;
    const a =
    <View style={styles.container}>
        
        <View style={{ flex: 1 }}>
        <Accordion
          activeSections={activeSections}
          sections={this.state.CONTENT}
          touchableComponent={TouchableOpacity}
          touchableProps={{ marginBottom: 5, activeOpacity: .8 }}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          duration={400}
          underlayColor={'#ffff'}
          onChange={this.setSections}
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
      <View style={{
        height:this.Height/4.5, margin:20,marginVertical:5,borderRadius: 2,
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
          onChangeText={(text) => {
            console.log(text)
          }}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          //   keyboardType={item.keyboardType}
          style={{
           

          }}
        />
      </View>
      <View
        style={{
          
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal:7,
         
         
        }}>
        <TouchableOpacity
          activeOpacity={.7}
          style={{ backgroundColor: '#FF8900', borderRadius: 10, alignItems:'center',flex: 1, margin: 10 }}
          onPress={() =>
            this.props.navigation.navigate('ListOfOffers')
          }>
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
    return (
    
      <View style={{flex:1,backgroundColor:'#fff'}}>

        <OrangeHeader 
            com={a}
            title={'Issues'} move={ ()=>this.props.navigation.toggleDrawer()}/>
       
      
       
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    //   alignItems: 'center',
    // justifyContent: 'center',
    //  borderWidth:5
  },
  Container:{
    flex:3,
    justifyContent:'center',
    backgroundColor:'#FF8900'
},
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },

  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-start',
    // borderWidth:.5,
    borderRadius:10
  },

 
  headerText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,1)' ,
    
  },
  textStyle:{
    fontSize:45,
    fontStyle:'normal',
    textAlign:'center',
    textDecorationStyle:'double',
    fontWeight:'bold',
    textAlignVertical:'center',
    color:'#F6F7F8'
},
  mainContainer: {
    flex: 1,
    justifyContent: "center",

  },
  iconStyle:{
    flex:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingEnd:15,
    paddingStart:15,

},
  animatedHeaderContainer: {
//position: 'absolute',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  }


});
