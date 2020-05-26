import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, Image } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context } from '../context/BikeContext';

const BikeDetailScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const bikePost = state.find((bikePost) => bikePost.id === navigation.getParam('id'));
  navigation.getParam('id');
  return (
    <View>
      <Text>{bikePost.content}</Text>
    </View>
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
  image: {
    width: 350,
    height: 200,
    marginBottom: 50,
  },
  container: {
    backgroundColor: '#DCDBD1',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

BikeDetailScreen.navigationOptions = {
  title: 'Bike Detail',
  headerStyle: { backgroundColor: '#1DA7BB' },
  headerTintColor: 'white',
  headerTitleStyle: { color: 'white' },
};

export default BikeDetailScreen;
