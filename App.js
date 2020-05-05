import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BikeListScreen from './src/screens/BikeListScreen';
import BikeDetailScreen from './src/screens/BikeDetailScreen';

const bikeListFlow = createStackNavigator({
  BikeList: BikeListScreen,
  BikeDetail: BikeDetailScreen,
});

const accountFlow = createStackNavigator({
  Account: AccountScreen,
});

accountFlow.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name='settings' size={20} />,
};

bikeListFlow.navigationOptions = {
  title: 'Bikes',
  tabBarIcon: <MaterialCommunityIcons name='bike' size={20} />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    bikeListFlow,
    accountFlow,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
