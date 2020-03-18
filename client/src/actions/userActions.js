
import axios from 'axios';
import { returnErrors } from './errorActions';


import {
  GET_USERS,
  USERS_LOADING,
  // USERS_LOADED
} from './types';


export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios
      .get('/api/users')
      .then(res =>
        dispatch({
          type: GET_USERS,
          payload: res.data
        })
      )
      // .then(
      //   dispatch(setUsersDoneLoading())
      // )
      
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const setUsersLoading = () => {
    return {
      type: USERS_LOADING
    };
  };  

  // export const setUsersDoneLoading = () => {
  //   return {
  //     type: USERS_LOADED
  //   };
  // }; 