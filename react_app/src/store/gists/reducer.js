import {
    GET_GISTS_START,
    GET_GISTS_SUCCESS,
    GET_GISTS_ERROR
  } from "./types";
  
  const initialState = {
    gists: [],
    gistError: null,
    gistPending: false,
  };
  
  export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_GISTS_START:
        return { ...state, gistPending: true };
      case GET_GISTS_SUCCESS:
        return { ...state, gistPending: false, gists: action.payload };
      case GET_GISTS_ERROR:
        return { ...state, gistPending: false, gistError: action.payload };

      default:
        return state;
    }
  };