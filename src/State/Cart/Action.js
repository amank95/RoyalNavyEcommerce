import axios from "axios";
import api, {API_BASE_URL } from "../../config/api";

// import { API_BASE_URL } from "../../";
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const getCart = (jwt) => async(dispatch) => {
  //console.log("req data ",reqData)
  dispatch({ type: GET_CART_REQUEST });
try {
 const {data} = await api.get(`/api/cart`)
 dispatch({
  type: GET_CART_SUCCESS,
  payload: data,
});
console.log("Cart - ",data)
} catch (error) {
  dispatch({
    type: GET_CART_FAILURE,
    payload:error.message
  });
}
};


export const addItemToCart = (reqData) => async (dispatch) => {
  console.log("Dispatching addItemToCart...");

    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  try {
   const {data} =await api.put(`/api/cart/add`,reqData)
   dispatch({
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload: data,
  });
  console.log("add item to cart ",data)
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload:error.message
    });
  }
};
// export const getCart = (jwt) => async (dispatch) => {
//   try {
//     dispatch({ type: GET_CART_REQUEST });
//     const config = {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//           "Content-Type":"application/json"
//         },
//       };
//     const { data } = await axios.get(`${API_BASE_URL}/api/cart/`,config);
// console.log("cart ",data)
//     dispatch({
//       type: GET_CART_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_CART_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

  
export const removeCartItem = (cartItemId) => async (dispatch) => {
  //console.log("req data ",reqData)
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });
try {
 const { data } = await api.delete(`/api/cart_items/${cartItemId}`)
 dispatch({
  type: REMOVE_CART_ITEM_SUCCESS,
  payload: cartItemId });
} catch (error) {
  dispatch({
    type: REMOVE_CART_ITEM_FAILURE,
    payload:error.message
  });
}
};

export const updateCartItem = (reqData) => async (dispatch) => {
  // console.log("req data ",reqData)
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });
try {
 const {data} = await api.put(`/api/cart_items/${reqData.cartItemId}`,reqData.data)
 dispatch({
  type: UPDATE_CART_ITEM_SUCCESS,
  payload: data,
});
} catch (error) {
  dispatch({
    type: UPDATE_CART_ITEM_FAILURE,
    payload:error.message
  });
}
};