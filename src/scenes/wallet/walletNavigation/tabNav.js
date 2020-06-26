import {createAppContainer} from 'react-navigation';
import transaction from '../transiaction/transiaction';
import payment from '../payment/payment';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {theme} from '../../../constants';
import {Button, Block, Text} from '_atoms';

const topTabNav = createMaterialTopTabNavigator(
  {
    Payment: payment,
    Transaction: {
      screen: transaction,
    },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled:false,

    tabBarOptions:{
      pressColor:'rgba(255,255,255,0)',
      inactiveTintColor:'gray',
      activeTintColor:'black',


      indicatorStyle:{
       
          height: '100%',
        backgroundColor:theme.colors.gray4,
        borderRadius:theme.sizes.radius
      },
      style:{
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:theme.sizes.radius,
        elevation:0,
    
        backgroundColor:'white'

        
      },
    },
    style:{
      marginTop:10
    }

  },
);
export default topTabNav;
