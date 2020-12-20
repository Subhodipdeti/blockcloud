import * as All from './actionTypes';
export const signIn = data => {
  return {
    type: All.LOGIN_SUCCESSFULLY, data
  }
}

export const signUp = newUser => {
  return dispatch => {
    console.log('===>>', newUser);
  };
};
