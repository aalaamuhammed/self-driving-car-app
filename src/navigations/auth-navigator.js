import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from '_scenes/welcome';
import LoginScreen from '_scenes/login';
import CreateAccountScreen from '_scenes/createAccount'
const AuthNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Welcome:WelcomeScreen,
  Login:LoginScreen,
  CreateAccount:CreateAccountScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;