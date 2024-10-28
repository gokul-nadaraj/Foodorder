import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Placeorder from './pages/placeorder/Placeorder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Myorder from './pages/myorders/myorder'
import Loginpopup from './components/Loginpopup/Loginpopup'
import { Verify } from './pages/verify/Verify'

const App = () => {
  const [showLogin,setShowLogin]= useState(false)
  return (
 <>
 
{showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}







 <div className='app'>
    <Navbar setShowLogin ={setShowLogin}  />
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/order' element={<Placeorder/>}/>
<Route path='/verify' element={<Verify/>}/>
<Route path='/myorders' element={<Myorder/>}/>
 



    </Routes>
    
    </div>
    <Footer/>

 
 </>
  )
}

export default App