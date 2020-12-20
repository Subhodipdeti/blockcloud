import * as All from '../Actions/actionTypes';

const initState = {
    authError: false,
    authState: '',
    authMessage: '',
    data: {},
  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case All.LOGIN_SUCCESSFULLY:
        console.log('Login Success');
        return {
          ...state,
          data: action.data,
          // authError: (state.authError = !state.authError),
        };
      case 'All.LOGIN_ERROR':
        console.log('Login Error', action.err.message);
        return {
          ...state,
          authError: (state.authError = !state.authError),
          authMessage: action.err.message,
        };
      case 'All.LOGOUT_SUCCESSFULLY':
        console.log('Logout SuccessFully');
        return {
          ...state,
          authState: 'Logout Success',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  