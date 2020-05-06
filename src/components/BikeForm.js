import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const BikeForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder='Bike Name...' />
        <Input placeholder='Owner Name...' />
        <Input placeholder='Phone Number...' />
        <Input placeholder='Details...' />
      </Spacer>
      <Spacer>
        <Button buttonStyle={{ backgroundColor: '#009CB2' }} raised title='Save Bike' />
      </Spacer>
    </>
  );
};

export default BikeForm;
