// import * as All from './ActionTypes';
import axios from 'axios';
export const signIn = credentials => {
  return dispatch => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        dispatch({type: 'LOGIN_SUCCESSFULLY', data: data});
      })
      .catch(err => console.log('..', err));

    // const firebase = getFirebase();
    // firebase.auth().signInWithEmailAndPassword(
    //     credentials.email,
    //     credentials.password
    // ).then(() => {
    //     dispatch({ type: All.LOGIN_SUCCESSFULLY })
    // }).catch((err) => {
    //     dispatch({ type: All.LOGIN_ERROR, err })
    // })
  };
};

export const signUp = newUser => {
  return dispatch => {
    console.log('===>>', newUser);
  };
};
