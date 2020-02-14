import {API_BASE_URL} from '../../config';
import axios from 'axios';
import { saveUser, clearUser } from '../../utilities/local-storage';

//Auth Actions
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
    type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS,
    currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
    type: AUTH_ERROR,
    error
});

//Default Post Options
/* const options = {
    headers: {'Content-Type': 'application/json'}
  }; */

//auth functions
export const loginUser = (username,password) => dispatch => {
    console.log("Inside of LOGIN ACTION");
    dispatch(authRequest());
    return axios.post(`${API_BASE_URL}/authenticate`,{username,password})//,options)
    .then((res) => {
        console.log('LOGIN response: ', res);
        storeAuthInfo(res.data , dispatch)
      }, (error) => {
        console.log(error);
      });
}

export const registerUser = (user) => //dispatch => 
{
    console.log("Inside of REGISTER ACTION");
    return axios.post(`${API_BASE_URL}/signup`,user)//,options)
    .then((res) => {
        console.log('REGISTER response: ', res);
      }, (error) => {
        console.log(error);
      });
}

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authInfo, dispatch) => {
  dispatch(setAuthToken(authInfo.jwt));
  dispatch(authSuccess(authInfo));
  //saveAuthToken(authToken);
  const user = JSON.stringify(authInfo);  //needs to be a json to store in local storage
  saveUser(user);
};


//if the token is already in the local storage where do you check to load it