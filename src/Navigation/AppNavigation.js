/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef, useState, useEffect } from 'react';
import { View, ActivityIndicator, StatusBar, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAppContext } from '../Context/ctx';
import RootStackScreen from './MainStack/index';
import AuthStack from './AuthStack/AuthStack';
import CreatePinScreen from '../Screens/CreatePinScreen/CreatePinScreen';
import { navigationRef, isMountedRef } from './index';

const App = () => {
  const { loginState, toggleAppState } = useAppContext();

  //FIXME:

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // Alert.alert('Ok');
      // console.warn(appState.current);
      toggleAppState(true, false);

      // dispatch({type: 'APP_STATE', value: true, isRenterPin: false});
    }
    if (appState.current === 'active') {
      toggleAppState(true, false);
      // dispatch({type: 'APP_STATE', value: true});
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };
  //FIXME:

  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);


  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#02295F',
        }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor="rgba(25, 42, 86, 0.9)" />
      <RootStackScreen />
      {/* {loginState.userToken && loginState.value ? (
        <CreatePinScreen
          token={loginState.userToken}
          isRenterPin={loginState.isRenterPin}
        />
      ) : loginState.userToken !== null ? (
        <RootStackScreen />
      ) : (
            <AuthStack />
          )} */}
    </NavigationContainer>
  );
};

export default App;
