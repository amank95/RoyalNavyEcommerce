import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Badge, Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
// import { useLocation, useNavigate } from "react-router-dom";
// import CartItem from "../Cart/CartItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";
import stripe_logo from  '../../../assets/stripe_logo.png';
import razorpay_logo from  '../../../assets/razorpay_logo.png';


const OrderSummary = () => {
//   const navigate = useNavigate();
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const orderId = searchParams.get("order_id");
const dispatch=useDispatch();
const jwt=localStorage.getItem("jwt");
const {order}=useSelector(store=>store);

const [method, setMethod] = useState('cod');

// console.log("orderId ", order)

useEffect(()=>{
  dispatch(getOrderById(orderId))
},[orderId])

// const handleCreatePayment=()=>{
//   const data={orderId:order.order?._id,jwt}
//   dispatch(createPayment(data))
// }
  // the below one added by me
const handleCreatePayment = (paymentMethod) => {
  setMethod(paymentMethod); // Set the selected method
  const data = { orderId: order.order?._id, jwt, paymentMethod };
  dispatch(createPayment(data));
};


  return (
    <div className="space-y-5">
        <div className="p-5 shadow-lg rounded-md border ">
            <AddressCard
            address={order.order?.shippingAddress}
             />
        </div>
       <div className="lg:grid grid-cols-3 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          {order.order?.orderItems.map((item) => (
            <>
              <CartItem item={item}/>
            </>
           ))} 
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price 
                {/* ({cart.cart?.totalItem} item) */}
                ({order.order?.totalItem} item)
              </span>
              <span>₹
                {order.order?.totalPrice}
           
              </span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">₹
                {order.order?.discounte}
                
                </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹
                {order.order?.totalDiscountedPrice}
           
                </span>
            </div>
          </div>

                    {/* --------------- Payment Method Selection ------------- */}
                    {/* <div className='flex gap-3 flex-col lg:flex-row'> */}
                        {/* <div 
                        onClick={() => handleCreatePayment('stripe')}  className='flex items-center gap-3 border-none p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-2' src={stripe_logo} alt="" />
                        </div> */}
                      <div onClick={() => handleCreatePayment('razorpay')} className='flex items-center gap-3 border-none p-2 px-3 cursor-pointer'>
                          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                        <img className='h-5 mx-2' src={razorpay_logo} alt="" />
                      </div>
                      <div onClick={() => handleCreatePayment('cod')}  className='flex items-center gap-3 border-none p-2 px-3 cursor-pointer'>
                          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                          <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                    </div>
                    {/* </div> */}

          <Button
           // onClick={() => navigate("/checkout?step=2")}
          onClick={() => handleCreatePayment(method)}
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
          >
            Payment
          </Button>
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default OrderSummary;
