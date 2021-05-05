import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchBusiness from './src/screens/SearchBusiness';


const navigator = createStackNavigator({
     Search : SearchBusiness,
}, {
  initialRouteName : 'Search',
  defaultNavigationOptions : {
    title : 'Search Business'
  }
});

export default createAppContainer(navigator);