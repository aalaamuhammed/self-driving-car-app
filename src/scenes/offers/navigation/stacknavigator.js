import ListOfOffers from '../listOfOffers'
import OfferDetails from '../offerDetails'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { TransitionSpecs,HeaderStyleInterpolators } from 'react-navigation-stack';

const MyTransition = {
  
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
    
        opacity:current
        ?current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.00000001,1],
        }):1,
      },
     
    };
  },
}


export default AppNavigator = createStackNavigator({
    ListOfOffers: {
    screen: ListOfOffers,    

},
OfferDetails:{
      screen: OfferDetails,
     }
  }
  ,{
    headerMode:null,

    defaultNavigationOptions: {
     ...MyTransition
     
     
      
    },
  });
  
 AppContainer =createAppContainer(AppNavigator);
