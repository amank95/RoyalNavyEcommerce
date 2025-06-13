import React from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
 import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { useEffect } from "react";
// import { getCart } from "../../../Redux/Customers/Cart/Action";

const Cart = () => {
 const dispatch = useDispatch();

  const navigate = useNavigate();
  const {cart}=useSelector(store=>store);
  const handleCheckout=()=>{
    navigate("/checkout?step=1")
  }
  // const jwt = localStorage.getItem("jwt");

  // console.log("cart ",cart)

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem,cart.deleteCartItem,cart.cartItems.length, cart.totalPrice]);
  return (
    <div className="">
      {/* {cart.cartItems.length>0 && */}
       <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          {cart.cart?.cartItems.map((item) => (
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
                ({cart.cart?.totalItem} item)
                
              </span>
              <span>₹
                {cart.cart?.totalPrice}
          
              </span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">₹
                {cart.cart?.discounte}
              
                </span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">
              {cart.cart?.totalPrice > 200 ? "Free" : `₹${cart.cart?.deliveryCharge || 50}`}
              </span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹
                {cart.cart?.totalDiscountedPrice}
                </span>
            </div>
          </div>

          <Button
          onClick={handleCheckout}
            // onClick={() => navigate("/checkout?step=2")}
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
          >
            Check Out
          </Button>
        </div>
      </div>
      </div>
      {/* } */}

      
      
    </div>
  );
};

export default Cart;
