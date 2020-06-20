import React,{useState} from 'react'
import { View,Modal} from 'react-native'
import Icon2 from 'react-native-vector-icons/Octicons';
import {Text} from '_atoms'
const modal = ({visible}) => {
    const [modalVisibility, setModalVisibility] = useState(visible);
        const visibilityPeriod=()=>{
            setTimeout(() => {
                setModalVisibility(false);
              }, 1500)
        }
        return (
          <Modal animationType="fade" transparent={true} visible={modalVisibility}>
            <View
              style={{
                backgroundColor: 'rgba(67, 39, 110,.5)',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Icon2
                  name="verified"
                  size={150}
                  color="#F6F7F8"
                  style={{alignSelf: 'center'}}
                />
    
                <Text center h2 regular white>
                  'Your hahah location is set Successfully'
                </Text>
                {visibilityPeriod()}
              </View>
            </View>
          </Modal>
        );
      };


export default modal
