import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {apis} from '../../../constants'
import axios from 'axios'

export default class cardDetails extends Component {
    state={
    id:0,    
    }
    getCardDerails=async()=>{
        const url=apis.users_api+`/{${this.state.id}}`+'{/creditCards}'
        console.log(url)
         try {
       
           const response = await axios.get(
             apis.users_api,
           );
       
         console.log(response.data);
         
         } catch (error) {
           console.error(error);
         }
    }
    // componentDidMount(){
    //     this.getCardDerails()
    // }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
