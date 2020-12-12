import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../../Screens/SplashScreen/SplashScreen';
import SignInScreen from '../../Screens/SignInScreen/SignInScreen';
import SignUpScreen from '../../Screens/SignUpScreen/SignUpScreen';
import CreatePinScreen from '../../Screens/CreatePinScreen/CreatePinScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <AuthStack.Screen name="CreatePinScreen" component={CreatePinScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
