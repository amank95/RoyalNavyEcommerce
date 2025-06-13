import React from 'react'
import { Routes, Route, useLocation }from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Cart from '../customer/components/Cart/Cart';
import Navbar from '../customer/components/Navbar/Navbar';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetail from '../customer/components/Order/OrderDetail';
import PaymentSuccess from '../customer/components/paymentSuccess/PaymentSuccess';
//import Navigation from '../customer/components/Navbar/Navigation';

const CustomerRouters = () => {
  const location = useLocation();

      // Only show Navigation component when not on the NotFound page
      const showNavigation = location.pathname !== "*";

  return (
    <div>
        {/* <div> */}
        {showNavigation &&  <Navbar/>}
       

        {/* </div> */}
        <Routes>
        <Route path='/login' element={<Homepage/>}> </Route>
        <Route path='/register' element={<Homepage/>}> </Route>
            <Route path='/' element={<Homepage/>}> </Route>
            <Route path='/home' element={<Homepage/>}> </Route>
            <Route path='/cart' element={<Cart/>}> </Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}> </Route>
            <Route path='/product/:productId' element={<ProductDetails/>}> </Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/account/order" element={<Order />}></Route>
            <Route path="/account/order/:orderId" element={<OrderDetail />}></Route>
            <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>

        </Routes>
        {/* <div> */}
            <Footer/>
        {/* </div> */}
    </div>
  );
};

export default CustomerRouters;