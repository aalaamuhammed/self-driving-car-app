import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {OrangeHeader} from '_molecules';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';



const CONTENT = [
  {
    title: {
      packageName: 'The Avenger - 20EGP',
      key: 1,
      percent: '30%',
      packageContent: [
        '- get 3 trips with 30%',
        '- get codes for you and your family',
        '- benefit 3',
      ],
    },
  },

  {
    title: {
      packageName: 'The Avenger - 20EGP',
      key: 1,
      percent: '15%',
      packageContent: [
        '- get 3 trips with 30%',
        '- get codes for you and your family',
        '- benefit 3',
      ],
    },
  },
  {
    title: {
      packageName: 'The Avenger - 20EGP',
      key: 1,
      percent: '20%',
      packageContent: [
        '- get 3 trips with 30%',
        '- get codes for you and your family',
        '- benefit 3',
      ],
    },
  },
  {
    title: {
      packageName: 'The Avenger - 20EGP',
      key: 1,
      percent: '15%',
      packageContent: [
        '- get 3 trips with 30%',
        '- get codes for you and your family',
        '- benefit 3',
      ],
    },
  },
];


export default class App extends Component {
  state = {
    activeSections: [],
  };

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
        
        <View style={{margin:10}}>
          <Text 
          style={{
            textAlign: 'center', 
            fontSize: 20, 
            fontWeight: 'bold',
          
            }}>
            {section.title.packageName}
          </Text>



          {section.title.packageContent.map(element=><Text>{element}</Text>)}
        </View>
        <View style={{flex:.5,justifyContent:'center',backgroundColor:'#FF8900'}}> 
          <Text style={[styles.headerText,{color:'#fff',transform:[{rotateZ:'90deg'}]}]}>{section.title.percent}</Text>
        </View>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
     return (
      <Animatable.View
      duration={400}
      style={styles.content}
      transition="backgroundColor"
         containerStyle={{flex: 1, borderWidth: 5}}>
       <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',

            }}>
           
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#FF8900',
                borderRadius: 10,
                flex: 1,
                margin: 10,
                alignItems:'center'
              }}
              onPress={() => this.props.navigation.navigate('ListOfOffers')}>
              <Text
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 10,
                  fontSize: 20,
                  color: 'white',
                }}>
               Apply
              </Text>
            </TouchableOpacity>
          </View>
     </Animatable.View>
     );
  }

  render() {
    const {multipleSelect, activeSections} = this.state;
    const a = 
    <View style={{flex:1}}>
    <Accordion
    activeSections={activeSections}
    sections={CONTENT}
    touchableComponent={TouchableOpacity}
    touchableProps={{marginBottom: 5,activeOpacity:.8}}
    renderHeader={this.renderHeader}
    renderContent={this.renderContent}
    duration={400}
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
    return (
      <View style={styles.container}>

        <OrangeHeader 
            com={a}
            title={'Package'} move={ ()=>this.props.navigation.toggleDrawer()}/>
       
         
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //   alignItems: 'center',
    // justifyContent: 'center',
    //  borderWidth:5
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#fff',
   // padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent:'space-between'
 
  },
  headerText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    borderRadius:10,
    backgroundColor: 'rgba(255,255,255,1)',
    // borderWidth:.5,
  },
});
