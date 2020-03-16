

import axios from 'axios';
import { returnErrors } from './errorActions';


import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_USERS,
  USERS_LOADING,
  USERS_LOADED
} from './types';


// const fetch = require('node-fetch');
// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('http://socioriotapi.herokuapp.com/api/users', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};


// Register User
export const register = ({ firstName, lastName, email, password, account, money }) => dispatch => {
  // Headers
  const config = {
      headers: {
    // 'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  };

  console.log(config)

  // Request body
  const body = JSON.stringify({firstName, lastName, email, password, account,money });

    console.log("consoling the body from register action ",body)
  // fetch('/api/users', {
  //   method : 'post',
  //   body : body,
  //   headers: { 'Content-Type': 'application/json' },
  // }).then(
  //   res => res.json()
  // ).then(
  //   console.log("regsterd")
  // )

    axios.post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      console.log(err)
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};



// Logout user

// export const logout  = ()  =>{
//   return {
//     type : LOGOUT_SUCCESS
//   }
// }

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
