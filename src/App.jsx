import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './home/Home'
import Signup from './auth/Signup'
import Login from './auth/Login'
import ForgetPassword from './auth/ForgetPassword'
import AccountOrders from './auth/AccountOrders'
import Shop from './shop/Shop'
import ProductDetail from './product/ProductDetail'

function App() {
  return (
    <Router>
      {/* Optional navigation */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/account-orders' element={<AccountOrders />} />
        <Route path='/shop' element={<Shop />} />
        <Route path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
