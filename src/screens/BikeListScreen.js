import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';

const BikeListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} h3>
        Bike List Screen
      </Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('BikeDetail', { _id: item._id })}> */}
      <TouchableOpacity onPress={() => navigation.navigate('BikeDetail')}>
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
      </TouchableOpacity>
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
  },
});

export default BikeListScreen;
