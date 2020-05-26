import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context } from '../context/BikeContext';
import { Feather } from '@expo/vector-icons';

const BikeListScreen = ({ navigation }) => {
  const { state, deleteBike } = useContext(Context);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.title} h3>
          Bike List Screen
        </Text>
      </Spacer>
      {/* <TouchableOpacity onPress={() => navigation.navigate('BikeDetail', { _id: item._id })}> */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('BikeDetail')}>
        <ListItem
          bottomDivider
          chevron={true}
          title='Name of Bike'
          leftAvatar={{
            source: {
              uri:
                'https://surlybikes.com/uploads/bikes/_medium_image/KarateMonkey_BK2042-2000x1333.jpg',
            },
          }}
          subtitle='Owner'
        />
      </TouchableOpacity> */}
      <FlatList
        data={state}
        keyExtractor={(bikePost) => bikePost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('BikeDetail', { id: item.id })}>
              <ListItem bottomDivider chevron={true} title={item.title} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
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
  container: {
    height: '100%',
    // backgroundColor: '#dbc9a9',
  },
});

export default BikeListScreen;
