import React, { Component } from 'react'
import { Text, View, FlatList,TextInput,StyleSheet,SectionList } from 'react-native'

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA:[
        {
          title: 'Today',
          data: [{dist:'El-Galaa St.',region:'Tanta,Qism 1,El-Bahr St.'}
          , {dist:'El-bahr St.',region:'Tanta,Qism 1,El-Bahr St.'}],
        },
        {
          title: 'Yesterday',
          data: [{dist:'El-Galaa St.',region:'Tanta,Qism 1,El-Bahr St.'}
          , {dist:'El-bahr St.',region:'Tanta,Qism 1,El-Bahr St.'}],
        },
       
        {
          title: '13/10/2019',
          data: [{dist:'El-Galaa St.',region:'Tanta,Qism 1,El-Bahr St.'}
          , {dist:'El-bahr St.',region:'Tanta,Qism 1,El-Bahr St.'}],
        },
      ]};
  }
  Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.dist}> {title.dist} </Text>
        <Text style={styles.region}> {title.region} </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex:1}}>
      <SectionList
        sections={this.state.DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <this.Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.headerStyle}>
          <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
      </View>
    
 
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
    paddingHorizontal:25,

    
  },
  header: {
    fontSize: 25,
    color:'#0094FC',
    fontWeight:'bold'
  },
  dist: {
    fontSize: 20,
    color:'#000000',
    fontFamily:'normal',
    textDecorationStyle:'solid',
    fontWeight:'bold'

  },
  region: {
    fontSize: 18,
    color:'#d6d7da',
    fontFamily:'normal',
    textDecorationStyle:'solid',
    fontWeight:'bold'

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




