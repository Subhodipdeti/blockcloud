/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useRef, useState, useEffect} from 'react';
import {View, ActivityIndicator, StatusBar, AppState} from 'react-native';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {useAppContext} from '../Context/ctx';
import RootStackScreen from './MainStack/index';
import AuthStack from './AuthStack/AuthStack';
import CreatePinScreen from '../Screens/CreatePinScreen/CreatePinScreen';
import {navigationRef, isMountedRef} from './index';
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isUserLogeed, setisUserLogeed] = React.useState(false);
  // const [userToken, setUserToken] = React.useState(null);

  const {loginState, toggleAppState} = useAppContext();

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

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

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
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme} ref={navigationRef}>
        <StatusBar backgroundColor="#192A56" />

        {loginState.userToken && loginState.value ? (
          <CreatePinScreen
            token={loginState.userToken}
            isRenterPin={loginState.isRenterPin}
          />
        ) : loginState.userToken !== null ? (
          <RootStackScreen />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
