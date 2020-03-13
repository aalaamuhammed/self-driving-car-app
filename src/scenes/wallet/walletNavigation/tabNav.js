import { createAppContainer } from 'react-navigation';
import Transaction from '../transiaction/transiaction'
import Payment from '../payment/payment'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const topTabNav=createMaterialTopTabNavigator(
    {  payment:Payment,
       transaction: {
         screen: Transaction
       }
     },{
         tabBarPosition:'top',
         tabBarOptions: {
           style: {
            backgroundColor: '#FF8900',
            
           },
           labelStyle: {
             fontSize: 17,
             fontStyle:'italic'
           },
         initialRouteName:'payment'
        
         },
  
     });
    // export default TopTabContainer = createAppContainer(topTab);  
    export default topTabNav; 