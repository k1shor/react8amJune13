import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./components/Pages/Home";
import Signin from "./components/Pages/Signin";
import Signup from "./components/Pages/Signup";
import Cart from "./components/Pages/Cart";
import MaterialDemo from "./components/Pages/MaterialDemo";
import Deals from "./components/Pages/Deals"
import Services from "./components/Pages/Services";
import Blogs from "./components/Pages/Blogs";


const MyRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/register" element={<Signup/>}/>
                <Route path="/cart" element={<Cart/>}/>

                {/* Material Pages */}
                <Route path="/mui" element={<MaterialDemo/>}/>
                <Route path="/deals" element = {<Deals/>}/>
                <Route path='/services' element = {<Services/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
            </Routes>
        </BrowserRouter>

    
  )
}

export default MyRoutes