// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import BikeForm from '../components/BikeForm';
import Spacer from '../components/Spacer';

const BikeCreateScreen = () => {
  return (
    <View>
      <Spacer>
        <Text style={styles.title} h3>
          Add A Bike
        </Text>
      </Spacer>
      <BikeForm />
    </View>
  );
};

BikeCreateScreen.navigationOptions = {
  title: 'Add Bike',
  headerStyle: { backgroundColor: '#1DA7BB' },
  headerTitleStyle: { color: 'white' },
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default withNavigationFocus(BikeCreateScreen);
