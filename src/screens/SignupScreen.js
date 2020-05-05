import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import * as Animatable from 'react-native-animatable';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.card} animation='fadeIn' duration={2000}>
        <NavigationEvents onWillBlur={clearErrorMessage} />
        <AuthForm
          headerText='Sign Up'
          errorMessage={state.errorMessage}
          submitButtonText='Sign Up'
          onSubmit={signup}
        />
        <NavLink routeName='Signin' text='Already have an account? Sign in instead!' />
      </Animatable.View>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;
