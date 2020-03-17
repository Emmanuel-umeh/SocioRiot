import {
    GET_USERS,
    USERS_LOADING
    // USERS_LOADED
  } from '../actions/types';

  const initialState = {
    users: [],
    loading: false
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USERS:
        //   case USERS_LOADED:
        return {
          ...state,
          users: action.payload,
          loading: false
        };
    //   case DELETE_ITEM:
    //     return {
    //       ...state,
    //       items: state.items.filter(item => item._id !== action.payload)
    //     };
    //   case ADD_ITEM:
    //     return {
    //       ...state,
    //       items: [action.payload, ...state.items]
    //     };
      case USERS_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }