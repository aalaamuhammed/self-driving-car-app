import React, { Component } from 'react'
import { View, FlatList,TextInput,StyleSheet,SectionList } from 'react-native'

import {Block, Text,Button} from '_atoms';
import {theme,apis} from '../../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import * as axios from 'axios';
export default class transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA:[
        {
          title: 'Today',
          data: [{dist:'Money in ride',region:'29L.E'}
          ],
        },
        {
          title: 'Yesterday',
          data: [{dist:'Money to account',region:'50L.E'}
          ],
        },
       
      
      ]};
    };
  

  get = async () => {
    try {
     
      const response = await axios.get(
        'http://192.168.1.4:3000/taxiApp/trips/history',
      );
     
      this.setState({DATA: response.data});
     
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount = () => {
    {
    //  this.get();
    }
  }
  Item({ title }) {
    return (
      <View style={styles.item}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Icon name="wallet" size={15} style={{ color: theme.colors.primary, paddingRight:5 }}>
          </Icon>
        <Text title style={styles.dist}> {title.dist} </Text>
        </View>

        <Text title gray style={styles.region}> {title.region} </Text>
        
      </View>
    );
  }
    render() {
        return (
          <Block card color={theme.colors.white}>
      <SectionList
        sections={this.state.DATA}
        style={{margin:10}}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <this.Item title={item} />}
        showsHorizontalScrollIndicator={false}

        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerStyle}>
          <Text title style={styles.header}>{title}</Text>
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
    // position: "relative",
     alignItems:'center',
    // paddingHorizontal:15,
    justifyContent:'space-between'

    
  },
  header: {
   
    color:'gray',
    fontWeight:'normal'
  },
  dist: {
   // fontSize: 19,
    color:'#000000',
    fontFamily:'normal',
    textDecorationStyle:'solid',
    fontWeight:'normal'

  },
  region: {
   // fontSize: 16,
    //color:'#d6d7da',
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
