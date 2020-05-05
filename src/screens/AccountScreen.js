import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Spacer>
        <Button buttonStyle={{ backgroundColor: '#F73733' }} title='Sign Out' onPress={signout} />
      </Spacer>
    </View>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  headerStyle: { backgroundColor: '#1DA7BB' },
  headerTitleStyle: { color: 'white' },
};

const styles = StyleSheet.create({});

export default AccountScreen;
