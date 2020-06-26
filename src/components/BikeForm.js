import React, { useContext, useState } from 'react';
import { Context } from '../context/BikeContext';
import { Input, Button } from 'react-native-elements';
import CameraModule from '../components/CameraModule';
import Spacer from './Spacer';

const BikeForm = ({ navigation, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const { addBike } = useContext(Context);
  return (
    <>
      <Spacer>
        <Input
          placeholder='Bike Name...'
          value={title}
          onChangeText={(text) => setTitle(text)}
          required
        />
        <Input
          placeholder='Bike Description...'
          value={content}
          onChangeText={(text) => setContent(text)}
          required
        />
      </Spacer>
      <Spacer>
        <Button
          buttonStyle={{ backgroundColor: '#009CB2' }}
          title='Save Bike'
          onPress={() => onSubmit(title, content)}
        />
      </Spacer>
    </>
  );
};

BikeForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

export default BikeForm;
