import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { updatePayment } from "../../../Redux/Customers/Payment/Action";
import { Alert, AlertTitle, Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
//import { getOrderById } from "../../../Redux/Customers/Order/Action";
//import OrderTraker from "../orders/OrderTraker";
//import AddressCard from "../adreess/AdreessCard";
import { useParams } from "react-router-dom";
import { updatePayment } from "../../../State/Payment/Action";
import { getOrderById } from "../../../State/Order/Action";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  // razorpay_payment_link_reference_id
  // razorpay_payment_id
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const {orderId}=useParams();
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  console.log("Redux order:", order.order);
  

  useEffect(() => {
    console.log("orderId",orderId)
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));

      // Stripe parameter
  const stripeSessionId = urlParams.get("session_id"); // Stripe's unique session ID
  if (stripeSessionId) {
    setPaymentId(stripeSessionId); // Treat Stripe session ID as paymentId
    setPaymentStatus("paid"); // Stripe payments are successful if redirected
  }
  }, []);

// ✅ 1️⃣ Update payment when payment is confirmed
useEffect(() => {
  if (paymentId && paymentStatus === "paid") {
    const data = { orderId, paymentId, jwt };
    dispatch(updatePayment(data));
  }
}, [paymentId, paymentStatus, orderId, jwt]);

// ✅ 2️⃣ Fetch order when orderId is available (without depending on order)
useEffect(() => {
  if (orderId) {
    dispatch(getOrderById(orderId));
  }
}, [orderId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1}/>

      <Grid container className="space-y-5 py-5 pt-20">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.discountedPrice}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
