import React,{useEffect,useState} from 'react'
import { View, Text,AsyncStorage } from 'react-native'
import deviceStorage from '../../services/deviceStorage.js';
import { StackActions, NavigationActions } from 'react-navigation';

const logout = (props) => {

    const [userToken, setUserToken] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const bootstrapAsync = async () => {
          let Token;
    
          try {
            Token = await AsyncStorage.removeItem('id_token')
          } catch (e) {
            // Restoring token failed
          }
    
          setUserToken(Token)
          setLoading(true)
          
        };

        //  const resetAction = props.navigation.dispatch(
        // StackActions.replace('Welcome')
        //   );
       
        // resetAction();
        bootstrapAsync();
      }, []);
   

    return (
        <View>
            {props.navigation.navigate('WhereToGo')}
            
        </View>
    )
}

export default logout
