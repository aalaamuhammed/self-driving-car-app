import React, { Component } from 'react'
import { View,Text, FlatList,TextInput,StyleSheet,SectionList } from 'react-native'

import {Block, Button} from '_atoms';
import {theme,apis} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as axios from 'axios';
export default class transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA:[
       
        {
          title: 'Yesterday',
          data: [{dist:'El-Galaa St.',region:'Tanta,Qism 1,El-Bahr St.'}
          , {dist:'El-bahr St.',region:'Tanta,Qism 1,El-Bahr St.'}],
        },
       
        {
          title: '2/2/2020',
          data: [{dist:'El-Galaa St.',region:'Tanta,Qism 1,El-Bahr St.'}
          , {dist:'El-bahr St.',region:'Tanta,Qism 1,El-Bahr St.'}],
        },
      ]};
    };
  

    get = async () => {
      try {
       
        const response = await axios.get(
          apis.users_api,
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
  Item({ title }) {
    return (
      <View style={styles.item}>
        
        <Icon name="taxi" size={15} style={{ color: theme.colors.primary, paddingRight:5 }}>
          </Icon>
        
        <Text style={styles.dist}> {title.dist} </Text>
        <Text style={styles.region}> {title.region} </Text>
      </View>
    );
  }
    render() {
        return (
          <Block card style={{borderBottomLeftRadius:0,borderBottomRightRadius:0}} color={theme.colors.white}>
      <SectionList
        sections={this.state.DATA}
        style={{margin:10}}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <this.Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerStyle}>
          <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
      </Block>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    
    marginVertical: 2,
    flex: 1, 
    flexDirection: 'row', 
    paddingVertical:5,
    position: "relative",
    alignItems:'center',
    paddingHorizontal:15,

    
  },
  header: {
    fontSize: 25,
    color:'gray',
    fontWeight:'normal'
  },
  dist: {
    fontSize: 19,
    color:'#000000',
    fontFamily:'normal',
    textDecorationStyle:'solid',
    fontWeight:'normal'

  },
  region: {
    fontSize: 16,
    color:'#d6d7da',
    fontFamily:'normal',
    textDecorationStyle:'solid',
    fontWeight:'normal'

  },
  headerStyle:{
   
    marginVertical: 5,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    
    position: "relative",
    paddingHorizontal: 15,
   
    borderRadius: 3,
    borderBottomWidth:.8,
    borderColor: '#d6d7da'
  }
})
