import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} from "./ActionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false };
    case GET_USER_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, user: {
        ...state.user,
        ...action.payload, // Ensure existing user details are preserved
        addresses: [...(state.user?.addresses || []), ...(action.payload.addresses || [])], // 🛠️ Append new addresses
      },
     };

    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
      case LOGOUT:
        localStorage.removeItem("jwt");
        return { ...state, jwt: null, user: null };
    default:
      return state;
  }
};

export default authReducer;
