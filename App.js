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
import BikeCreateScreen from './src/screens/BikeCreateScreen';
import ScanScreen from './src/screens/ScanScreen';
import { Provider } from './src/context/BikeContext';

const bikeListFlow = createStackNavigator({
  BikeList: BikeListScreen,
  BikeDetail: BikeDetailScreen,
});

const accountFlow = createStackNavigator({
  Account: AccountScreen,
});

const bikeCreateFlow = createStackNavigator({
  BikeCreate: BikeCreateScreen,
});

const scanScreenFlow = createStackNavigator({
  ScanScreen: ScanScreen,
});

accountFlow.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name='settings' size={20} />,
};

bikeCreateFlow.navigationOptions = {
  title: 'Add Bike',
  tabBarIcon: <MaterialCommunityIcons name='plus' size={20} />,
};

scanScreenFlow.navigationOptions = {
  title: 'Scan Bike',
  tabBarIcon: <MaterialCommunityIcons name='qrcode-scan' size={20} />,
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
  mainFlow: createBottomTabNavigator(
    {
      bikeListFlow,
      bikeCreateFlow,
      accountFlow,
      scanScreenFlow,
    },
    {
      tabBarOptions: {
        activeTintColor: '#1DA7BB',
      },
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <Provider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </Provider>
    </AuthProvider>
  );
};
