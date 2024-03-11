import React from 'react'
import "./App.css";
import Navbar from './components/Common/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashBoard from './components/dashboard/DashBoard';
import Profile from './components/dashboard/Profile';
import Products from './components/dashboard/Products';
import Productpage from './pages/Productpage';
import Cart from './components/dashboard/Cart';
import Settings from './components/dashboard/Settings';
const App = () => {
  return (
    <div className="w-screen min-h-screen  flex flex-col font-inter">
     <Navbar />
     <Routes>
      
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/products" element={<Productpage />} />



  <Route element={<DashBoard />} >
   <Route path='/dashboard/profile' element={<Profile />} />
   <Route path='/dashboard/products' element={<Products />} />
   <Route path='/dashboard/cart' element={<Cart />} />
   <Route path='/dashboard/settings' element={<Settings />} />



  </Route>
     




     </Routes>
   </div>
  )
}

export default App
