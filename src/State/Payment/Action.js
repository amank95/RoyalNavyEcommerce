import { API_BASE_URL } from '../../config/api';
import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_SUCCESS,
    UPDATE_PAYMENT_FAILURE,
  } from './ActionType';
  
  import axios from 'axios';
  
  export const createPayment = (reqData) => async (dispatch) => {
    console.log("create payment reqData ",reqData)
//if the error is this orderId undefined then uncomment the below one than by me
  //   if (!reqData.orderId) {
  //     console.error("Error: orderId is undefined in createPayment function");
  //     return;
  // }

    try {
      dispatch({
        type: CREATE_PAYMENT_REQUEST,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${reqData.jwt}`,
        },
      };
// the below one added by me if loop
      if (reqData.paymentMethod === "razorpay") {
        // ---- Razorpay Payment Handling ----
       // const response = await axios.post(`${API_BASE_URL}/api/payment/razorpay`, reqData, config);
  
      const { data } = await axios.post(`${API_BASE_URL}/api/payments/${reqData.orderId}`,reqData, config);
  console.log("datta",data)
  if(data.payment_link_url){
    window.location.href=data.payment_link_url;
  }
      // dispatch({
      //   type: CREATE_PAYMENT_SUCCESS,
      //   payload: data,
      // });

//this else if too added by me
    } else if (reqData.paymentMethod === "cod"){
     // ---- Cash on Delivery (COD) Handling ----
     const response = await axios.post(`${API_BASE_URL}/account/orders`, reqData, config);

     dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: response.data });
     alert("Order placed successfully! Pay on delivery.");

//this else too added by me
    }else {
      // ---- Other Payments (e.g., Stripe) ----
      const { data } = await axios.post(`${API_BASE_URL}/api/payments/stripe/${reqData.orderId}`, reqData, config);
      console.log("datta", data);
      
      if (data.payment_link_url) {
        window.location.href = data.payment_link_url;
      }

      dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data });
    }
    
  }catch (error) {
      dispatch({
        type: CREATE_PAYMENT_FAILURE,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
  



  export const updatePayment = (reqData) => {
    return async (dispatch) => {
      console.log("update payment reqData ",reqData)
      dispatch({type: UPDATE_PAYMENT_REQUEST});
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${reqData.jwt}`,
          },
        };

        let data;

        if (reqData.paymentMethod === "razorpay") {
        const response  = await axios.get(`${API_BASE_URL}/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`,config);
         data = response.data;
        }
        else if (reqData.paymentMethod === "cod") {
          // COD Payment Update (if needed)
          const response  = await axios.put(
            `${API_BASE_URL}/api/payments/cod/${reqData.orderId}`,
            reqData, // Pass the data in PUT requests
            config
          );  
          data = response.data;
        }else {
          // Stripe Payment Update
          const response  = await axios.get(
            `${API_BASE_URL}/api/payments/stripe?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`,
            config
          );
          data = response.data;
        }
        console.log("updated data ---- ",data)

        dispatch({type:UPDATE_PAYMENT_SUCCESS,payload:data});
      } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message});
        console.log("catch error ",error)
      }
    };
  };

export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (payment) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment,
  };
};

export const updatePaymentFailure = (error) => {
  return {
    type: UPDATE_PAYMENT_FAILURE,
    payload: error,
  };
};

 
  