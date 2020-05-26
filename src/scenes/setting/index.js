import React, { Component } from 'react'
import { Text, View, FlatList,TextInput,StyleSheet,SectionList,Switch } from 'react-native'
import {OrangeHeader} from '_molecules';

export default class ScreenContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          DATA:[
            {
              title:{label:'Notifications',border:false},
              data: [{element:{content:'Offers Notifications',switch:true,value:false,key:'offerNotification'}},
                    {element:{content:'Car Arrival Notifications',switch:true,value:false,key:'CarNotification'}}],
            },
            {
             title:{label:'Privacy',border:true},
              data: [{element:{content:'Saving your default routes',switch:true,value:false,key:'privacy'}}],
            },     
          ],
         switchData:[{name:'offerNotification',value:false},{name:'CarNotification',value:false},{name:'privacy',value:false}],
         A:false
        };
        
      }
      updateItem(index, itemAttributes) {
          this.setState({
            switchData: [
               ...this.state.switchData.slice(0,index),
               Object.assign({}, this.state.switchData[index], itemAttributes),
               ...this.state.switchData.slice(index+1)
            ]
          });
      }

     
      Item=({ title })=> {
        var index = this.state.switchData.findIndex(x=> x.name === title.element.key);
        return (
          <View style={[styles.item]}>
            <Text style={styles.dist}> {title.element.content} </Text>
            <Switch 
            thumbColor={ '#E9E7E7' }
            value={this.state.switchData[index].value}
            trackColor={{true:'#FF8900'}}
            onValueChange = {(value)=>this.updateItem(index,{value:value})}
        
           />
           
          </View>
        );
      }
      render() {
          const a =
          <View style={{flex:1,alignItems:'center',paddingTop:5}}>
          <SectionList
            sections={this.state.DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) =><this.Item title={item} />}
            renderSectionHeader={({ section: { title } }) => ( 
              <View style={[styles.headerStyle,title.border? styles.border:styles.notBorder]}>
              <Text style={styles.header}>{title.label}</Text>
              </View>
            )}
          />
          </View>
        return (
          
        <View style={{flex:1}}>
            <OrangeHeader 
            com={a}
            title={'Package'} move={ ()=>this.props.navigation.toggleDrawer()}/>
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
      justifyContent:'space-between',
      paddingHorizontal:25,
      
  
      
    },
    header: {
      fontSize: 25,
      color:'#FF8900',
      fontWeight:'bold'
    },
    dist: {
      fontSize: 20,
      color:'#000000',
      fontFamily:'normal',
      textDecorationStyle:'solid',
     
  
    },

    headerStyle:{
     paddingTop:8,
      marginVertical: 5,
      flex: 1, 
      alignItems:'center',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      
      position: "relative",
      paddingHorizontal: 15,
     
      borderRadius: 3,
      borderColor: '#d6d7da',
     
    },
    border:
         {borderTopWidth:.5},
    notBorder:{borderTopWidth:0}
    
  })
  
  
