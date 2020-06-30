import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.form}>
      <Spacer>
        <Text style={styles.title} h3>
          {headerText}
        </Text>
      </Spacer>
      <Input
        style={styles.input}
        label='Email'
        labelStyle={{ color: '#798893' }}
        labelStyle={{ color: '#5e5d5d' }}
        placeholder='email@address.com'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        leftIcon={{ type: 'Feather', name: 'mail', color: '#5e5d5d' }}
        leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
      />
      <Spacer />
      <Input
        secureTextEntry
        label='Password'
        labelStyle={{ color: '#5e5d5d' }}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        leftIcon={{ type: 'Feather', name: 'lock', color: '#5e5d5d' }}
        leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Spacer>
        <Button
          buttonStyle={{ backgroundColor: '#009CB2' }}
          raised
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  form: {
    borderRadius: 10,
    // marginHorizontal: 10,
    width: '90%',
    // backgroundColor: 'white',
  },
  input: {
    color: 'white',
  },
  title: {
    textAlign: 'center',
  },
});

export default AuthForm;
