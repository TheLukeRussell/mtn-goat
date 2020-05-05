import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Image
        source={{
          uri:
            'https://mountaingoatgvl.com/cms/wp-content/uploads/2017/11/cropped-TMG-Primary-noBG.png',
        }}
        style={styles.image}
      />
      <AuthForm
        // headerText='Sign In'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText='Sign In'
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DCDBD1',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: 243,
    height: 85,
    marginBottom: 50,
  },
});

export default SigninScreen;
