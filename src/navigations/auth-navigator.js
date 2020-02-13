import {createStackNavigator} from 'react-navigation-stack';

import WelcomeScreen from '_scenes/welcome';
import LoginScreen from '_scenes/login';
import ForgotScreen from '_scenes/forgotPasswords';

import CreateAccountScreen from '_scenes/createAccount';
import TermsScreen from '_scenes/terms';
import BasicInfoScreen from '_scenes/basicInfo';
import PhoneNumberScreen from '_scenes/phoneNumber';
import VerificationCodeScreen from '_scenes/verificationCode';



const AuthNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
    headerMode: 'none',
};

const RouteConfigs = {
  Welcome:WelcomeScreen,
  Login:LoginScreen,
  ForgotPassword:ForgotScreen,
  CreateAccount:CreateAccountScreen,
  Terms:TermsScreen,
  BasicInfo:BasicInfoScreen,
  PhoneNumber:PhoneNumberScreen,
  VerificationCode:VerificationCodeScreen

};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;