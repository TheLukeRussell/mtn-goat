import React, { useContext, useState } from 'react';
import { Context } from '../context/BikeContext';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const BikeForm = ({ navigation, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const { addBike } = useContext(Context);
  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BikeForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 4,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 10,
  },
});

export default BikeForm;
