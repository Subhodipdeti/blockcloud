import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/Store/Reducers/rootReducer';
import {AppContextProvider} from './src/Context/ctx';
import AppNavigation from './src/Navigation/AppNavigation';

export default () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <AppContextProvider>
        <AppNavigation />
      </AppContextProvider>
    </Provider>
  );
};
