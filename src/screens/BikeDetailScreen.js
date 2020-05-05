import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const BikeDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  return (
    <>
      <Text style={styles.title} h4>
        {bike.name}
      </Text>
    </>
  );
};
const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: 'black',
    color: 'white',
  },
});

BikeDetailScreen.navigationOptions = {
  title: 'Bike Detail',
};

export default BikeDetailScreen;
