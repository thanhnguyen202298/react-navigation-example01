/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Home from './screen/Home'
import Profile from './screen/Profile'
import Settings from './screen/Setting'
import About from './screen/AboutPage'

import { createAppContainer, createStackNavigator, 
  createBottomTabNavigator, createMaterialTopTabNavigator,
createSwitchNavigator } from 'react-navigation';


const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile }
  },
  { initialRouteName: "Home" }
);

const SettingStack = createStackNavigator(
  {
    Settins: Settings,
    About: About
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Setings : SettingStack
  }
)

const MaterialTop = createMaterialTopTabNavigator({
  Setting: SettingStack,
  Home: HomeStack
})

const SwNavStack = createSwitchNavigator({
  Setts: SettingStack,
  Home: HomeStack,
})
export default App = createAppContainer(TabNavigator);
