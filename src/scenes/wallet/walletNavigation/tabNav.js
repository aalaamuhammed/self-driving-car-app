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
    tabBarOptions: {
      //btaa3 el-tab kolo bkol mafeeeh
      activeTintColor: theme.colors.black,
      activeBackgroundColor: theme.colors.white,
      upperCaseLabel: false,
      borderRadius: theme.sizes.radius,
      indicatorStyle: {
        width: 0,
      },
      tabStyle: {
        backgroundColor: theme.colors.white,
      },
      style: {
        borderRadius: theme.sizes.radius,

        backgroundColor: theme.colors.gray4,
        elevation: 0,
      },
      labelStyle: {
        fontSize: 17,
        fontStyle: 'italic',
        color: theme.colors.gray,
      },
      initialRouteName: 'payment',
    },
    style: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.sizes.radius,
      marginTop: 25,
      marginBottom: 10,
    },
  },
);
export default topTabNav;
