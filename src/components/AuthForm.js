import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label='Email'
        labelStyle={{ color: '#798893' }}
        placeholder='email@address.com'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        leftIcon={{ type: 'Feather', name: 'mail', color: '#798893' }}
        leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
      />
      <Spacer />
      <Input
        secureTextEntry
        label='Password'
        labelStyle={{ color: '#798893' }}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        leftIcon={{ type: 'Feather', name: 'lock', color: '#798893' }}
        leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button raised title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
