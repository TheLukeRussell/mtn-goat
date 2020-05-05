import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';

const BikeListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.title} h3>
        Bike List Screen
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('BikeDetail', { _id: item._id })}>
        <ListItem bottomDivider chevron={true} title='Bike' />
      </TouchableOpacity>
    </>
  );
};

BikeListScreen.navigationOptions = {
  title: 'Bikes',
  headerStyle: { backgroundColor: '#1DA7BB' },
  headerTitleStyle: { color: 'white' },
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
});

export default BikeListScreen;
