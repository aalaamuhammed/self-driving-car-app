import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewCard from '../payment/viewCards'
import AddMoney from '../payment/addMoney'
import TopTabScreen from '../topTab'
import AddCard from '../payment/addCard'
const PaymentStack=createStackNavigator({
    topTab:{
        screen:TopTabScreen},
    viewCard:ViewCard,
    addMoney:AddMoney,
    addCard:AddCard
  },{
      headerMode:'none'
  })
  PaymentStack.navigationOptions = ({ navigation }) => ({
    tabBarVisible: navigation.state.index === 0,
    swipeEnabled: navigation.state.index === 0
  });
  
export default PaymentStack;