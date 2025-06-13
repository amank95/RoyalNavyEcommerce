import React from 'react'
//import Homepage from './Pages/Homepage'
// import Navbar from './customer/components/Navbar/Navbar'
// import Product from './customer/components/Product/Product'
// import ProductDetails from './customer/components/ProductDetails/ProductDetails'
// import Cart from './customer/components/Cart/Cart'
// import Checkout from './customer/components/Checkout/Checkout'
// import Order from './customer/components/Order/Order'
// import Footer from './customer/components/Footer/Footer'
// import OrderDetail from './customer/components/Order/OrderDetail'
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './Routers/CustomerRouters'
import AdminRouter from './Routers/AdminRouter'

const App = () => {
  const isAdmin=true;
  return (
    <div>

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}/>
        <Route path='/admin/*' element={<AdminRouter/>}/>
      </Routes>
    </div>
  )
}

export default App