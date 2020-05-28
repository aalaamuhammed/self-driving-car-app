import React, {useState} from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {OrangeHeader} from '_molecules';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/AntDesign';



const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'How to choose the right car?',
    content: BACON_IPSUM,
  },
  {
    title: 'Is it safe to use?',
    content: BACON_IPSUM,
  },
  {
    title: 'How is the fare calculated?',
    content: BACON_IPSUM,
  },
  {
    title: 'How to deal with the app?',
    content: BACON_IPSUM,
  },
  {
    title: "Why it's name is Taxi?",
    content: BACON_IPSUM,
  },
];

export default  help =({navigation}) => {
  const [activeSections, setActiveSections] = useState([])
  

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections)
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        {(!isActive)?
        <Icon name='right' size={25} color='#FF8900' />
        :
        <Icon name='minus' size={25} color='#FF8900' />}
      </Animatable.View>
    );
  };

  const renderContent=(section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={styles.content}
        transition="backgroundColor"
        containerStyle={{flex: 1, borderWidth: 5}}>
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

 
  
    const a = 
    <View style={{flex:1}}>
    <Accordion
    activeSections={activeSections}
    sections={CONTENT}
    touchableComponent={TouchableOpacity}
    touchableProps={{marginBottom: 5,activeOpacity:.8}}
    renderHeader={renderHeader}
    renderContent={renderContent}
    duration={400}
    onChange={setSections}
    sectionContainerStyle={{
      margin: 20,
      shadowColor: '#000',
      borderWidth: 0.1,
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
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    }}>
    <TouchableOpacity
      activeOpacity={.7}
      style={{backgroundColor: '#FF8900', borderRadius: 10,flex:1,margin:10}}          
      onPress={() =>
        navigation.navigate('ListOfOffers')
      }>
      <Text
        style={{
          paddingHorizontal: 12,
          paddingVertical: 10,
          fontSize: 20,
          color: 'white',
        }}>
        Get in touch and ask question
      </Text>
    </TouchableOpacity>
    </View>
    </View>
    return (
      <View style={styles.container}>

        <OrangeHeader 
        style={{
            flex: 1,
            paddingTop: 30,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderWidth: 2,
          }}
            com={a}
            title={'Help'} move={ ()=>navigation.toggleDrawer()}/>
       
         
       
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    //  borderWidth:5
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
    padding: 10,
    alignItems: 'flex-start',
    // borderWidth:.5,
    borderRadius:10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',

  },
  content: {
    padding: 20,
    backgroundColor: 'rgba(255,255,255,1)',
   
    // borderWidth:.5,
  },
});

/*<View style={{flex: 1,backgroundColor:'#F0F0F0'}}>
<NavigationDrawerStructure
  onClick={() => {
    this.props.navigation.toggleDrawer();
  }}
/>


<RenderCars/> 
</View>
*/