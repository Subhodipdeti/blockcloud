import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = React.createContext();
export const useAppContext = () => {
  return React.useContext(AuthContext);
};

export const AppContextProvider = props => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    value: false,
    isRenterPin: false,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          isRenterPin: action.isRenterPin,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
          isRenterPin: action.isRenterPin,
        };
      case 'APP_STATE':
        return {
          ...prevState,
          value: action.value,
          isRenterPin: action.isRenterPin,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async userToken => {
        try {
          await AsyncStorage.setItem('@blockchain_Key', userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({
          type: 'LOGIN',
          id: 'abc',
          token: userToken,
          isRenterPin: true,
        });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.multiRemove(['@blockchain_Key', '@blockchain_user']);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: async userToken => {
        try {
          await AsyncStorage.setItem('@blockchain_Key', userToken);
        } catch (e) {
          console.log(e);
        }
        // console.log('user token: ', userToken);
        dispatch({
          type: 'REGISTER',
          id: 'abc',
          token: userToken,
          isRenterPin: true,
        });
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme);
      },
      toggleAppState: (value, isRenterPin) => {
        dispatch({type: 'APP_STATE', value: value, isRenterPin: isRenterPin});
      },
    }),
    [],
  );

  React.useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('@blockchain_Key');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  const {signIn, signOut, signUp, toggleAppState, toggleTheme} = authContext;

  return (
    <AuthContext.Provider
      value={{
        loginState,
        signIn,
        signOut,
        signUp,
        toggleAppState,
        toggleTheme,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// FIXME:
// useEffect(() => {
//   setTimeout(async () => {
//     // setIsLoading(false);
//     let userToken;
//     userToken = null;
//     try {
//       userToken = await AsyncStorage.getItem('@blockchain_Key');
//     } catch (e) {
//       console.log(e);
//     }
//     // console.log('user token: ', userToken);
//     dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
//   }, 1000);
// }, []);
