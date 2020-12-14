import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider as PaperProvider } from 'react-native-paper';
import rootReducer from './src/Store/Reducers/rootReducer';
import { AppContextProvider } from './src/Context/ctx';
import AppNavigation from './src/Navigation/AppNavigation';
import { ThemeProvider } from './src/Themes/Context/ThemeContext';
import useAppTheme from './src/Themes/Context';


const ThemeConsumer = () => {
  const { theme } = useAppTheme();

  return (
    <PaperProvider theme={theme}>
      <AppContextProvider>
        <AppNavigation />
      </AppContextProvider>
    </PaperProvider>
  );
};


export default () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    </Provider>
  );
};

