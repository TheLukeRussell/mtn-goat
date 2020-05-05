import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, Image } from 'react-native-elements';
import Spacer from '../components/Spacer';

const BikeDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  return (
    <>
      <Card style={styles.container} title='Name Of Bike'>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{
            uri:
              'https://surlybikes.com/uploads/bikes/_medium_image/KarateMonkey_BK2042-2000x1333.jpg',
          }}
        />
        <Text style={styles.name} h5>
          Owner Name:
        </Text>
        <Spacer />
        <Text style={styles.name} h5>
          Email:
        </Text>
        <Spacer />
        <Text style={styles.name} h5>
          Phone Number:
        </Text>
        <Spacer />
        <Text style={styles.name} h5>
          What's Broken:
        </Text>
        <Spacer />
      </Card>
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
