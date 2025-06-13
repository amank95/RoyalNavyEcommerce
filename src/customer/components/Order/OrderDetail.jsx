import React from 'react'
// import AddressCard from '../AddressCard/AddressCard'
// import OrderTracker from './OrderTracker'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from "@mui/material/colors";
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { getOrderById } from '../../../State/Order/Action';



const OrderDetail = () => {
  const dispatch = useDispatch();
  const {orderId}=useParams();
  const {order}= useSelector(store=>store);

  console.log("order", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

    
  const navigate = useNavigate();

  return (
    <div className=" px-2 lg:px-36 space-y-7 ">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>

      <Grid container className="space-y-5">
         {order.order?.orderItems.map((item) => ( 
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item?.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller:  {item?.product.brand}</p>
                  <p>₹{item.price} </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  onClick={() => navigate(`/account/rate/${item.product._id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarBorderIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
         ))} 
      </Grid>
   
    </div>
  )
}

export default OrderDetail