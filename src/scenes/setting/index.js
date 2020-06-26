import React, { Component } from 'react'
import {  View, FlatList,TextInput,StyleSheet,SectionList,Switch } from 'react-native'
import {Block, Text} from '_atoms';
import {theme} from '../../constants';
export default class Setting extends Component {
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
            trackColor={{true:theme.colors.primary}}
            onValueChange = {(value)=>this.updateItem(index,{value:value})}
        
           />
           
          </View>
        );
      }
      render() {
         
        return (
          
        // <View style={{flex:1}}>
        //     <OrangeHeader 
        //     com={a}
        //     title={'Package'} move={ ()=>this.props.navigation.toggleDrawer()}/>
        // </View>
        <Block bottom middle color={'primary'}>
      <Block flex={0.2} row right>
        <Block
          middle
          card
          flex={0.52}
          color={'rgba(255,255,255,.6)'}
          style={{
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            marginVertical: 30,
           
          }}>
          <Text h1 center regular bold gray4>
            Settings
          </Text>
        </Block>
      </Block>
      <Block
        flex={0.75}
        card
        middle
        style={{
          
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
         
        }}>
       
        <View style={{flex:1,alignItems:'center',paddingTop:5,backgroundColor:theme.colors.white,borderRadius:theme.sizes.radius,borderBottomLeftRadius:0,borderBottomRightRadius:0}}>
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
     </Block>
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
      justifyContent:'space-between',
      paddingHorizontal:25,
      
  
      
    },
    header: {
      fontSize: 25,
      color:theme.colors.primary,
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
  
  
